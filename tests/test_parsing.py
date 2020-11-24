from pathlib import Path
from typing import Callable
import pytest
from docster.visitor import parse
from docster.models import Module
from docster.helpers import resolve_module_name


@pytest.fixture
def parse_module(shared_datadir: Path) -> Callable[[str], Module]:
    def parse_module(name: str) -> Module:
        """Get a docster.models.Module from a module in the tests/data directory"""
        module_name = name
        module = shared_datadir / f"{module_name.replace('.', '/')}.py"
        return parse(module, module_name)

    return parse_module


def test_extract_function_signature(parse_module: Callable[[str], Module]):
    result = parse_module("signature")
    assert result.functions[0].signature == "def add(a: int, b: int) -> int:"


def test_extract_constructor_signature(parse_module: Callable[[str], Module]):
    result = parse_module("signature")
    assert len(result.classes) == 1
    cls = result.classes[0]
    assert cls.constructor.signature == 'def __init__(self, bla: str = "bla"):'


def test_dunders_and_privates_not_in_methods(parse_module: Callable[[str], Module]):
    """
    docster.models.ClassDef.methods should only contain regular methods
    """
    result = parse_module("signature")
    assert len(result.classes[0].methods) == 0


def test_init_modules_lifted_to_parent(shared_datadir: Path):
    base_dir = shared_datadir / "example_module"
    module_path = base_dir / "__init__.py"
    assert resolve_module_name(module_path, base_dir) == "example_module"


def test_private_functions_hidden(parse_module: Callable[[str], Module]):
    """
    Private functions should not show up in docster.models.Module.functions
    """
    result = parse_module("signature")
    assert len(result.functions) == 1

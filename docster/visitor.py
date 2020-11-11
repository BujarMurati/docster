import ast
from pathlib import Path
from typing import Optional
from docstring_parser import parse as parse_docstring
from docstring_parser.common import Docstring, ParseError
from .models import ClassDef, FuncDef, Module


class DocstringVisitor(ast.NodeVisitor):
    def __init__(self, module_name: str, source: str):
        self.stack = [module_name]
        self.source = source
        self.module = None

    @property
    def qual_name(self):
        return ".".join(self.stack)

    def visit_Module(self, module: ast.Module):
        self.module = Module(
            name=self.stack[0].split(".")[-1],
            qualified_name=self.stack[0],
            classes=[],
            functions=[],
            docstring=self._parse_docstring(ast.get_docstring(module)),
            raw_docstring=ast.get_docstring(module),
        )
        for child in ast.iter_child_nodes(module):
            self.visit(child)

    def visit_ClassDef(self, class_def: ast.ClassDef):
        self.stack.append(class_def.name)
        self.module.classes.append(
            ClassDef(
                name=class_def.name,
                qualified_name=self.qual_name,
                docstring=self._parse_docstring(ast.get_docstring(class_def)),
                raw_docstring=ast.get_docstring(class_def),
                source=ast.get_source_segment(self.source, class_def),
                methods=[],
            )
        )
        for child in ast.iter_child_nodes(class_def):
            self.visit(child)
        self.stack.pop()

    def visit_FunctionDef(self, func_def: ast.FunctionDef):
        func = FuncDef(
            name=func_def.name,
            qualified_name=f"{self.qual_name}.{func_def.name}",
            docstring=self._parse_docstring(ast.get_docstring(func_def)),
            raw_docstring=ast.get_docstring(func_def),
            source=ast.get_source_segment(self.source, func_def),
        )
        parent_class = next(
            filter(
                lambda class_def: class_def.name in func.qualified_name,
                self.module.classes,
            ),
            None,
        )
        if parent_class is None:
            self.module.functions.append(func)
        else:
            parent_class.methods.append(func)

    def _parse_docstring(self, raw: Optional[str]) -> Optional[Docstring]:
        if raw is not None:
            try:
                return parse_docstring(raw)
            except ParseError:
                return None
        return None


def parse(module: Path, module_name: str) -> Module:
    """Extract structured docstrings from a module

    Args:
        module (Path): path to a python module, i.e. dash/dash.py
        module_name (str): name of the module, i.e. dash.dash

    Returns:
        Module: a docster.models.Module containing structured docstrings
    """
    with module.open("r") as file:
        content = file.read()
    tree = ast.parse(content, filename=module.name)
    visitor = DocstringVisitor(module_name, content)
    visitor.visit(tree)
    return visitor.module

from pathlib import Path
from typing import List


def resolve_module_name(module_path: Path, base_dir: Path) -> str:
    """Performs *path arithmetics* to determine a qualified module name

    Args:
        module_path (Path): path to the module whose qual name to resolve
        base_dir (Path): path to the package root

    Returns:
        str: qualified module name, i.e. "root.foo.bar" for "root/foo/bar"
    """
    module_path = module_path.resolve()
    base_dir = base_dir.resolve()
    return ".".join(module_path.relative_to(base_dir).parts).rstrip(".py")


def _list_files(d: Path) -> List[Path]:
    """ Recursively list files in a dir and its sub dirs """
    if d.is_file():
        return [d]
    else:
        sub_dirs = [d for d in d.iterdir() if d.is_dir()]
        files = [f for f in d.iterdir() if f.is_file()]
        for d in sub_dirs:
            files += _list_files(d)
        return files


def find_modules(dir_: Path) -> List[Path]:
    """ Recursively find all modules in a directory """

    return [f for f in _list_files(dir_) if f.suffix == ".py"]

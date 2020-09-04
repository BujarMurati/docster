from pathlib import Path
from tempfile import TemporaryDirectory
import os

from git import Repo
import typer

from .helpers import find_modules

app = typer.Typer()


@app.command()
def remote(
    uri: str = typer.Argument(...),
    template_path: Path = typer.Option(Path("template.md")),
    out_dir: Path = typer.Option(Path("/build")),
    package_root: Path = typer.Option(Path("/src")),
):
    """Fetch a remote git repo, extract docstrings and render a template

    Args:
        uri (str): a uri from which to fetch a remote git repo
        template_path (Path): path to a template
        out_dir (Path): where to write the output to
        package_root (Path): the relative path to the package root inside the repo
    """
    with TemporaryDirectory() as tmp_dir:
        Repo.clone_from(uri, tmp_dir)
        modules = find_modules(Path(tmp_dir) / package_root)
        typer.echo("\n".join([str(m) for m in modules]))


if __name__ == "__main__":
    app()

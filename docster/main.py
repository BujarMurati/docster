"""Entrypoint for the docster CLI"""

from pathlib import Path
from tempfile import TemporaryDirectory

from git import Repo
import typer
from jinja2 import Template

from .models import Module
from .visitor import parse
from .helpers import find_modules, resolve_doc_file_path, resolve_module_name

app = typer.Typer()


def write(data: Module, template: Template, doc_file: Path, dry_run: bool) -> None:
    """Render template and write to stdout or file

    Args:
        data (Module): a docster.models.Module
        template (Template): a Jinja2 template
        doc_file (Path): path to the target file
        dry_run (bool): if True, write to stdout instead of the file
    """
    if dry_run:
        typer.echo(str(doc_file))
        typer.echo(template.render(module=data))
        typer.echo("\n")
    else:
        doc_file.parent.mkdir(exist_ok=True)
        with doc_file.open("w") as file:
            file.write(template.render(module=data))


def process_module(
    module: Path,
    package_root: Path,
    template: Template,
    output_dir: Path,
    file_extension: str,
    dry_run: bool,
):
    module_name = resolve_module_name(module, package_root.parent)
    doc_file = resolve_doc_file_path(module_name, output_dir, file_extension)
    data = parse(module, module_name)
    write(data, template, doc_file, dry_run)


@app.command()
def remote(
    uri: str = typer.Argument(...),
    template_file: Path = typer.Option(Path("template.md")),
    output_dir: Path = typer.Option(Path("/build")),
    package_root: Path = typer.Option(Path("/src")),
    dry_run: bool = typer.Option(False),
):
    """Fetch a remote git repo, extract docstrings and render a template

    Args:
        uri (str): a uri from which to fetch a remote git repo
        template_path (Path): path to a template
        out_dir (Path): where to write the output to
        package_root (Path): the relative path to the package root inside the repo
    """
    with template_file.open("r") as file:
        template = Template(file.read())
    file_extension = "".join(template_file.suffixes)

    with TemporaryDirectory() as tmp_dir:
        directory = Path(Repo.clone_from(uri, tmp_dir).working_dir)
        for module in find_modules(directory / package_root):
            process_module(
                module,
                directory / package_root,
                template,
                output_dir,
                file_extension,
                dry_run,
            )


@app.command()
def local(
    directory: Path = typer.Argument(Path(".")),
    template_file: Path = typer.Option(Path("template.md")),
    output_dir: Path = typer.Option(Path("/build")),
    dry_run: bool = typer.Option(False),
):
    """Extract docstrings from a local package and render a template

    Args:
        dir (Path, optional): path to the package. Defaults to ".".
        template_path (Path, optional): jinja2 template. Defaults to "template.md".
        out_dir (Path, optional): where to write rendered templates. Defaults to "/build".
    """
    with template_file.open("r") as file:
        template = Template(file.read())
    file_extension = "".join(template_file.suffixes)

    for module in find_modules(directory):
        process_module(module, directory, template, output_dir, file_extension, dry_run)


if __name__ == "__main__":
    app()

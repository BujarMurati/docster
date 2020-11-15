---
id: home
title: Docster
sidebar_label: Getting started
slug: /
---

Docster is a static analysis tool that extracts Python docstrings from your code and inserts them into any [Jinja2](https://jinja.palletsprojects.com/en/2.11.x/) template of your liking. Use this tool to automatically build documentation for your project.

:::note Warning
This is an early release! Be prepared for a bunch of bugs, missing features and breaking changes.
:::

## Why Docster?

- **Static**: Docster never imports your code, nor do any of your code's dependencies need to be installed

- **Pluggable**: Docster just renders templates. Build content for whatever site generator you prefer.

- **Markup-agnostic**: Build documentation in your preferred markup langague. Docster doesn't care if you use RST, Markdown, HTML or anything else.



## Installation
Docster requires Python >= 3.8

```bash
pip install docster
```

## Usage

```bash
$ docster --help
Usage: docster [OPTIONS] COMMAND [ARGS]...

  Extract docstrings from a python package and render them in a custom
  template. Docstring extraction is performed statically, meaning that your
  code is not being imported or run, so there is no need to worry about side
  effects.

Options:
  --install-completion  Install completion for the current shell.
  --show-completion     Show completion for the current shell, to copy it or
                        customize the installation.

  --help                Show this message and exit.

Commands:
  local   Extract docstrings from a local package and render a template...
  remote  Fetch a remote git repo, extract docstrings and render a template...
```

### Working with local packages
```bash
$ docster local --help
Usage: docster local [OPTIONS] [DIRECTORY]

  Extract docstrings from a local package and render a template

Arguments:
  [DIRECTORY]  path to the package  [default: .]

Options:
  -t, --template-file PATH        path to a Jinja2 template  [default: template.md]

  -o, --output PATH               where to write the output to  [default:
                                  build]

  -m, --mode [file|directory|stdout]
                                  Output mode, one of "file" | "directory" |
                                  "stdout". For "file" and "stdout" the
                                  template receives a Package object and is
                                  written to "output" or echoed
                                  standardoutput. For "directory", the
                                  template receives one Module object per
                                  module and is written to one file per
                                  module, with the output directory structure
                                  mimicking the package structure. Defaults to
                                  "stdout"   [default: stdout]

  --help                          Show this message and exit.
```

### Working with remote packages
```bash
$ docster remote --help
Usage: docster remote [OPTIONS] URI

  Fetch a remote git repo, extract docstrings and render a template

Arguments:
  URI  a git uri from which to fetch a remote git repo  [required]

Options:
  -t, --template-file PATH        path to a Jinja2 template  [default:
                                  template.md]

  -o, --output PATH               where to write the output to  [default:
                                  build]

  -p, --package-root PATH         the relative path to the package root inside
                                  the repo  [default: src]

  -m, --mode [file|directory|stdout]
                                  Output mode, one of "file" | "directory" |
                                  "stdout". For "file" and "stdout" the
                                  template receives a Package object and is
                                  written to "output" or echoed
                                  standardoutput. For "directory", the
                                  template receives one Module object per
                                  module and is written to one file per
                                  module, with the output directory structure
                                  mimicking the package structure. Defaults to
                                  "stdout"   [default: stdout]

  --help                          Show this message and exit.
```
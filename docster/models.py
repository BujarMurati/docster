from typing import List, Optional
from dataclasses import dataclass
from docstring_parser.common import Docstring


@dataclass
class Node:
    name: str
    qualified_name: str
    docstring: Optional[Docstring]
    raw_docstring: Optional[Docstring]

    @property
    def is_documented(self) -> bool:
        return self.raw_docstring is None


@dataclass
class FuncDef(Node):
    source: str


@dataclass
class ClassDef(Node):
    source: str
    methods: List[FuncDef]


@dataclass
class Module(Node):
    classes: List[ClassDef]
    functions: List[FuncDef]

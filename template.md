#{{ module.qualified_name }}

```python
{{module.raw_docstring or ""}}
```
{% for class_ in module.classes %}
```python
{{ class_.qualified_name }}
{{ class_.raw_docstring or "" }}
```
{% endfor %}
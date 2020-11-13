#{{ module.qualified_name }}

```python
{{module.raw_docstring or ""}}
```
{% for class_ in module.classes %}
## {{class_.qualified_name}}
```python
{{ class_.raw_docstring or "" }}
```
{% for method in class_.methods %}
### {{method.qualified_name}}
```python
{{method.raw_docstring}}
```
{% endfor %}
{% endfor %}

{% for function in module.functions %}
## {{function.qualified_name}}
```python
{{ function.raw_docstring }}
```
{% endfor %}
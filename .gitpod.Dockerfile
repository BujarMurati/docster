FROM gitpod/workspace-full

USER gitpod

ENV PIP_USER=no

RUN pip install poetry

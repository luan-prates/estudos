FROM python:3

WORKDIR /app

RUN pip install Django==4.2.2

RUN django-admin startproject projeto

ENTRYPOINT [ "python", "projeto/manage.py", "runserver" ]

CMD [ "0.0.0.0:8000" ]
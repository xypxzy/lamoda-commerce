# Pulling the base image
# FROM python:3.11.4-slim-bullseye

# ENV PYTHONBUFFERED=1
# ENV PYTHONDONTWRITEBYTECODE=1
# ENV PIP_DISABLE_PIP_VERSION_CHECK=1

# WORKDIR /django-api

# RUN apt-get update && apt-get -y install pip

# COPY ./requirements.txt .
# RUN pip install -r requirements.txt

# COPY . .

# EXPOSE 8002

# За базу используем официальный image питона
FROM python:3.10.6

# Отключаем буферизацию логов
ENV PYTHONUNBUFFERED 1

# Обновляем пакетный менеджер
RUN pip install --upgrade pip


RUN apt-get update


# Копируем все файлы приложения в рабочую директорию в контейнере
WORKDIR /django-api
COPY ./requirements.txt ./

RUN python3 -m pip install --upgrade --no-cache-dir setuptools==58.0
RUN pip install -r requirements.txt
COPY . .
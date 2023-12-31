# Документация для GitHub Репозитория: Магазин Одежды

Добро пожаловать в документацию для репозитория "Магазин Одежды". В этом репозитории разрабатывается полнофункциональный интернет-магазин одежды, используя современные технологии для фронтенда и бэкенда.

## Описание проекта

Магазин Одежды - это веб-приложение, разработанное для продажи модной одежды онлайн. Основная цель проекта - предоставить пользователям удобную платформу для выбора и покупки одежды. Проект разделен на фронтенд и бэкенд, использующие следующие технологии:

### Фронтенд

- Фреймворк: React
- Инструмент для быстрого старта: Vite
- Язык программирования: TypeScript
- Управление состоянием: Redux Toolkit (RTK)
- Запросы к бэкенду: RTK Query
- Стилизация: Tailwind CSS

### Бэкенд

- Фреймворк: Django REST Framework
- База данных: PostgreSQL

## Установка

Для запуска проекта локально, выполните следующие шаги:

1. Клонируйте репозиторий:

```bash
git clone https://github.com/your-username/your-repository.git
```

2. Перейдите в директорию проекта:

```bash
cd your-repository
```

### Фронтенд

3. Установите зависимости:

```bash
npm install
```

4. Запустите разработческий сервер:

```bash
npm run dev
```

### Бэкенд

5. Перейдите в папку бэкенда:

```bash
cd django-api
```

6. Добавьте .env окружение:

7. Установите зависимости:

```bash
pip install -r requirements.txt
```

7. Примените миграции:

```bash
python manage.py migrate
```

8. Загрузите фикстуры:

```bash
python manage.py loaddata backend/products/fixtures/goods_w.json
python manage.py loaddata backend/products/fixtures/images_w.json
```

9. Запустите сервер:

```bash
python manage.py runserver
```

## Запуск с использованием Docker Compose

Docker Compose позволяет управлять множеством контейнеров как единым приложением. Для запуска проекта с использованием Docker Compose выполните следующие шаги:

1. Убедитесь, что у вас установлен Docker и Docker Compose на вашей машине.

2. Клонируйте репозиторий, если вы еще этого не сделали:

```bash
git clone https://github.com/xypxzy/lamoda-commerce
```

3. Перейдите в директорию проекта:

```bash
cd your-repository
```
4. Запустите контейнеры с помощью Docker Compose:

```bash
docker-compose up
```

Проект будет собран и запущен в контейнерах. Фронтенд будет доступен по адресу `http://localhost:8082`, а бэкенд по адресу `http://localhost:8002`.

## Примечание

Обратите внимание, что это общая инструкция, и она может потребовать доработок в зависимости от ваших специфических настроек и требований. Пожалуйста, ознакомьтесь с официальной документацией Docker Compose для более подробной информации о настройке и использовании контейнеров.

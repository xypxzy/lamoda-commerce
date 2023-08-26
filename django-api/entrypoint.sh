#!/bin/sh

if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for postgres..."

    while ! nc -z $SQL_HOST $SQL_PORT; do
      sleep 0.1
    done

    echo "PostgreSQL started"
fi

python manage.py flush --no-input
python manage.py migrate
python manage.py create_default_admin
# python manage.py loaddata backend/products/fixtures/goods_w.json
# python manage.py loaddata backend/products/fixtures/images_w.json



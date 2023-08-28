#!/bin/sh

sleep 10
python manage.py flush --no-input
python manage.py migrate
python manage.py create_default_admin
# python manage.py loaddata backend/products/fixtures/goods_w.json
# python manage.py loaddata backend/products/fixtures/images_w.json

exec "$@"

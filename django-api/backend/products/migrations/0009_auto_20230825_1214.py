# Generated by Django 4.2.4 on 2023-08-25 06:14

from django.db import migrations


product_data = [
    {
        "model": "products.product",
        "pk": 1,
        "fields": {
            "name": "Краска для волос",
            "serial_number": "hair1",
            "description": "Профессиональная краска для волос с органическими ингредиентами, которые можно использовать в домашних условиях.",
            "way_to_use": "Нанести краску на всю длину и кончики волос и оставить на 15 минут. Затем нанести краску на корни и распределить остаток по всей длине, оставив краску примерно на 30 минут.",
            "compound": [],
            "price": "734.00",
            "user": "1",
            "categories": [],
            "created_at": "2023-08-23T03:33:59.740619Z",
            "updated_at": "2023-08-23T03:33:59.740638Z"
        }
    },
    {
    "model": "products.product",
    "pk": 2,
    "fields": {
            "name": "Кондиционер для увлажнения и питания сухих волос",
            "serial_number": "hair2",
            "description": "Кондиционер способствует легкому расчесыванию волос, укрепляет и придает блеск. В составе органический экстракт овса, кокосовое масло, масло иллипе и миндаля.",
            "way_to_use": "Равномерно нанести на влажные волосы, оставить на 3-5 минут. Тщательно смыть водой.",
            "compound": [],
            "price": "1240.00",
            "user": "1",
            "categories": [],
            "created_at": "2023-08-23T03:33:59.740619Z",
            "updated_at": "2023-08-23T03:33:59.740638Z"
        }
    },
    {
        "model": "products.product",
        "pk": 3,
        "fields": {
            "name": "Эликсир многофункциональный 12 в 1",
            "serial_number": "hair3",
            "description": "Интенсивная маска-спрей мгновенного действия, не требующая смывания. Разработанное на основе натуральных ингредиентов средство активно воздействует на проблемные зоны.",
            "way_to_use": "Встряхнуть флакон перед использованием. Нанести продукт на вымытые и подсушенные полотенцем волосы в необходимом количестве. Уложить волосы.",
            "compound": [],
            "price": "294.00",
            "user": "1",
            "categories": [],
            "created_at": "2023-08-23T03:33:59.740619Z",
            "updated_at": "2023-08-23T03:33:59.740638Z"
        }
    },
    {
        "model": "products.product",
        "pk": 4,
        "fields": {
            "name": "Шампунь Основной уход для ежедневного применения для всех типов волос",
            "serial_number": "hair4",
            "description": "Содержит хитозан, который увлажняет волосы и предохраняет их от потери влаги. Провитамин В5 укрепляет волосы, придаёт им эластичность и здоровый блеск.",
            "way_to_use": "Нанести на влажные волосы, вспенить. Тщательно смыть.",
            "compound": [],
            "price": "809.00",
            "user": "1",
            "categories": [],
            "created_at": "2023-08-23T03:33:59.740619Z",
            "updated_at": "2023-08-23T03:33:59.740638Z"
        }
    },
    {
        "model": "products.product",
        "pk": 5,
        "fields": {
            "name": "Дышащий лак для ногтей",
            "serial_number": "nail1",
            "description": "Дышащая формула безопасна для ногтевой пластины и предназначена в первую очередь для обладательниц слабых, ломких и проблемных ногтей.",
            "way_to_use": "Рекомендуется использовать single step, т.е. без применения основы и/или завершающего покрытия, перекрывающих дышащий эффект.",
            "compound": [],
            "price": "300.00",
            "user": "1",
            "categories": [],
            "created_at": "2023-08-23T03:33:59.740619Z",
            "updated_at": "2023-08-23T03:33:59.740638Z"
        }
    },
    {
        "model": "products.product",
        "pk": 6,
        "fields": {
            "name": "Профессиональная пилочка для ногтей",
            "serial_number": "nail2",
            "description": "Форма и жесткость пилочки подходят для профессионального маникюра.",
            "way_to_use": "Пилочка способствуют бережному опилу ногтей.",
            "compound": [],
            "price": "149.00",
            "user": "1",
            "categories": [],
            "created_at": "2023-08-23T03:33:59.740619Z",
            "updated_at": "2023-08-23T03:33:59.740638Z"
        }
    },
    {
        "model": "products.product",
        "pk": 7,
        "fields": {
            "name": "Мультифункциональный восстанавливающий концентрат для кожи вокруг глаз",
            "serial_number": "cream1",
            "description": "Мгновенное заметное восстановление. Сила омоложения.",
            "way_to_use": "Наносить на кожу вокруг глаз перед сном.",
            "compound": [],
            "price": "5710.00",
            "user": "1",
            "categories": [],
            "created_at": "2023-08-23T03:33:59.740619Z",
            "updated_at": "2023-08-23T03:33:59.740638Z"
        }
    },
    {
        "model": "products.product",
        "pk": 8,
        "fields": {
            "name": "Сыворотка для роста ресниц",
            "serial_number": "cream2",
            "description": "Создана для того, чтобы отрастить длинные ресницы и обеспечить им поддерживающий уход в течение 8 месяцев.",
            "way_to_use": "Использовать сыворотку как часть ежедневного ухода перед сном.",
            "compound": [],
            "price": "3637.00",
            "user": "1",
            "categories": [],
            "created_at": "2023-08-23T03:33:59.740619Z",
            "updated_at": "2023-08-23T03:33:59.740638Z"
        }
    },
    {
        "model": "products.product",
        "pk": 9,
        "fields": {
            "name": "Мицеллярная вода для всех типов кожи",
            "serial_number": "face2",
            "description": "Бережно очищает кожу от загрязнений. Не содержит агрессивных ПАВ, синтетических отдушек и парабенов.",
            "way_to_use": "Подойдет для снятия макияжа. Можно использовать ежедневно.",
            "compound": [],
            "price": "110.00",
            "user": "1",
            "categories": [],
            "created_at": "2023-08-23T03:33:59.740619Z",
            "updated_at": "2023-08-23T03:33:59.740638Z"
        }
    },
    {
        "model": "products.product",
        "pk": 10,
        "fields": {
            "name": "Питательная гель-маска для губ",
            "serial_number": "cream4",
            "description": "Блестящая маска для увеличения объема губ с чарующим ароматом спелой малины и ежевики.",
            "way_to_use": "Нанести питательную маску на 10-15 минут, затем снять её влажной салфеткой.",
            "compound": [],
            "price": "169.00",
            "user": "1",
            "categories": [],
            "created_at": "2023-08-23T03:33:59.740619Z",
            "updated_at": "2023-08-23T03:33:59.740638Z"
        }
    }
]

images_data = [
    {
      "model": "products.productimage",
      "pk": 1,
      "fields": {
        "product": "1",
        "image": "painter.jpg"
      }
    },
    {
      "model": "products.productimage",
      "pk": 2,
      "fields": {
        "product": "2",
        "image": "condicioner.jpg"
      }
    },
    {
      "model": "products.productimage",
      "pk": 3,
      "fields": {
        "product": "3",
        "image": "elixir.jpg"
      }
    },
    {
      "model": "products.productimage",
      "pk": 4,
      "fields": {
        "product": "4",
        "image": "shampoo.jpg"
      }
    },
    {
      "model": "products.productimage",
      "pk": 5,
      "fields": {
        "product": "5",
        "image": "polish.jpg"
      }
    },
    {
      "model": "products.productimage",
      "pk": 6,
      "fields": {
        "product": "6",
        "image": "nail_fil.jpg"
      }
    },
    {
      "model": "products.productimage",
      "pk": 7,
      "fields": {
        "product": "7",
        "image": "multi_concentrate.jpg"
      }
    },
    {
      "model": "products.productimage",
      "pk": 8,
      "fields": {
        "product": "8",
        "image": "syvorotka.jpg"
      }
    },
    {
      "model": "products.productimage",
      "pk": 9,
      "fields": {
        "product": "9",
        "image": "mic_water.jpg"
      }
    },
    {
      "model": "products.productimage",
      "pk": 10,
      "fields": {
        "product": "10",
        "image": "gel_mask.jpg"
      }
    }
]


def create_data(apps, schema_editor):
    # getting all the models
    User = apps.get_model('users', 'User')
    Product = apps.get_model('products', 'Product')
    Category = apps.get_model('products', 'Category')
    Compound = apps.get_model('products', 'Compound')

    # creating a new mock models
    user = User.objects.create(username='user1', password='user1')
    compound1 = Compound.objects.create(name='Углерод')
    compound2 = Compound.objects.create(name='Водород')
    comps = Compound.objects.all()

    category1 = Category.objects.create(name='Материальное')
    category2 = Category.objects.create(name='Существенное')
    cats = Category.objects.all()


    for product_item in product_data:
        fields = product_item['fields']
        product = Product(
            name=fields['name'],
            price=fields['price'],
            serial_number=fields['serial_number'],
            description=fields['description'],
            way_to_use=fields['way_to_use'],
            user=user,
        )
        # Save the product
        product.save()

        # add categories and compounds
        product.categories.set(cats)
        product.compound.set(comps)

        # repeating the save because the data has changed
        product.save()


def add_images(apps, schema_editor):
    Product = apps.get_model('products', 'Product')
    ProductImage = apps.get_model('products', 'ProductImage')

    for image in images_data:
        fields = image['fields']
        image = ProductImage(
            product=Product.objects.get(id=fields['product']),
            image=fields['image']
        )

        image.save()


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0008_product_price'),
    ]

    operations = [
        migrations.RunPython(create_data),
        migrations.RunPython(add_images)
    ]
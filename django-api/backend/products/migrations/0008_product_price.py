# Generated by Django 4.2.4 on 2023-08-22 05:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0006_compound_product_way_to_use_product_compound'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='price',
            field=models.DecimalField(decimal_places=2, default=99.99, max_digits=10),
            preserve_default=False,
        ),
    ]

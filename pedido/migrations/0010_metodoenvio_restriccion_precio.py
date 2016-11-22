# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-11-20 21:22
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pedido', '0009_metodoenvio_grupo'),
    ]

    operations = [
        migrations.AddField(
            model_name='metodoenvio',
            name='restriccion_precio',
            field=models.DecimalField(decimal_places=2, default=0, help_text=b'Todo precio mayor que ese numero lo habilita', max_digits=12),
        ),
    ]
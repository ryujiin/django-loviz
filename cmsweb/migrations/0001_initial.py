# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-11-06 23:43
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Bloque',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(blank=True, help_text=b'El titulo del bloque', max_length=100)),
                ('seccion', models.CharField(blank=True, help_text=b'El id donde se colocara', max_length=100)),
                ('estilo', models.CharField(blank=True, max_length=100)),
                ('cuerpo', models.TextField(blank=True)),
                ('template', models.CharField(blank=True, max_length=100, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='ImageCarrusel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(blank=True, help_text=b'Titulo que tendra la imagen en el Alt', max_length=100)),
                ('estilo', models.CharField(blank=True, max_length=100)),
                ('link', models.CharField(blank=True, max_length=100)),
                ('orden', models.PositiveIntegerField(default=0)),
                ('imagen', models.ImageField(upload_to=b'bloque/carrusel')),
                ('bloque', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='imagenes_carrusel', to='cmsweb.Bloque')),
            ],
        ),
        migrations.CreateModel(
            name='Pagina',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(help_text=b'El titulo de la pagina web', max_length=100)),
                ('slug', models.SlugField(max_length=120, unique=True)),
                ('descripcion', models.CharField(help_text=b'La descripcion que se vera en la pagina para el buscador', max_length=150)),
                ('activo', models.BooleanField(default=True)),
                ('estilo', models.CharField(blank=True, max_length=100)),
                ('cuerpo', models.TextField(blank=True)),
            ],
        ),
        migrations.AddField(
            model_name='bloque',
            name='page',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='bloques', to='cmsweb.Pagina'),
        ),
    ]
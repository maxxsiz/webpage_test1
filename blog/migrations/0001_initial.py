# Generated by Django 3.0.8 on 2020-10-04 10:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Reso',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('res_name', models.CharField(max_length=12, verbose_name='Ресурс')),
                ('rarest', models.CharField(max_length=16, verbose_name='редкость')),
            ],
        ),
    ]

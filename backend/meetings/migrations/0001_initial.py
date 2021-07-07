# Generated by Django 3.2.5 on 2021-07-07 09:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Meeting',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_time', models.DateTimeField(auto_now=True, verbose_name='Date/Time')),
                ('local', models.CharField(max_length=100, verbose_name='Local')),
                ('mode', models.CharField(max_length=100, verbose_name='Game mode')),
                ('team1', models.CharField(max_length=100, verbose_name='Members of Team 1')),
                ('team2', models.CharField(max_length=100, verbose_name='Members of Team 2')),
            ],
        ),
    ]
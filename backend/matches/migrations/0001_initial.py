# Generated by Django 3.2.5 on 2021-07-07 10:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('meetings', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Match',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('attack_team1', models.BooleanField(verbose_name='Was Team 1 attacking?')),
                ('winner_team1', models.BooleanField(verbose_name='Did Team 1 win?')),
                ('goals_team1', models.PositiveIntegerField(verbose_name='Goals scored by Team 1')),
                ('goals_team2', models.PositiveIntegerField(verbose_name='Goals scored by Team 2')),
                ('meeting_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='matches', to='meetings.meeting')),
            ],
        ),
    ]

from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand

class Command(BaseCommand):
    def handle(self, *args, **options):
        user = get_user_model()
        if not user.objects.filter(username='admin1').first():
            get_user_model().objects.create_superuser(username='admin1', password='admin1', email='admin1@ex.com')

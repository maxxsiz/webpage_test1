from django.db import models

class Reso(models.Model):
    res_name = models.CharField('Ресурс', max_length=12)
    rarest = models.CharField('редкость', max_length=16)
    #description = models.CharField('Description', max_length=500)
    
    def __str__(self):
        return self.res_name
    
    class Meta:
        verbose_name = "Ресурс"
        verbose_name_plural = 'Ресурсы'

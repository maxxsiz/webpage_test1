from .models import Reso
from django.forms import ModelForm, TextInput


class ResoForm(ModelForm):
    class Meta:
        model = Reso
        fields = ['res_name','rarest']
        widgets = {'res_name':TextInput(attrs={'placeholder':'Назва ресурса','class':'form-control'}),
                   'rarest':TextInput(attrs={'placeholder':'Рідкість','class':'form-control'})
        }
from django import forms

class ContactForm(forms.Form):
    your_name = forms.CharField(max_length=100)
    your_email = forms.EmailField()
    your_message = forms.CharField()


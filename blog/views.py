from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.core.mail import send_mail, BadHeaderError
from .forms import ContactForm
import re

def mobile(request):
    MOBILE_AGENT_RE=re.compile(r".*(iphone|mobile|androidtouch)",re.IGNORECASE)

    if MOBILE_AGENT_RE.match(request.META['HTTP_USER_AGENT']):
        return True
    else:
        return False

def main(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        print(form)
        if form.is_valid():
            your_name = form.cleaned_data['your_name']
            your_message = form.cleaned_data['your_message']
            your_email = form.cleaned_data['your_email']
            recipients = ['werfeteiii@gmail.com']
            print(str(your_name) + str(your_message) + str(your_email))
            if your_name and your_message and your_email:
                try:
                    send_mail(your_name, your_message, your_email, recipients)
                except BadHeaderError:
                    return HttpResponse('Invalid header found.')
                return HttpResponse('OKS')
            else:
                return HttpResponse('Make sure all fields are entered and valid.')

    else:
        form = ContactForm()
    print(mobile(request))
    if mobile(request):
        return render(request, 'blog/main_mobile.html')
    else:
        return render(request, 'blog/main.html')

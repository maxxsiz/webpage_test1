from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
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
        if form.is_valid():
            print("valid")
            your_name = form.cleaned_data['your_name']
            your_message = form.cleaned_data['your_message']
            your_email = form.cleaned_data['your_email']
            recipients = ['werfeteiii@gmail.com']
            print("Name: " + str(your_name) + " Email: " + str(your_email) + "Text: " + str(your_message))
            if your_name and your_message and your_email:
                text = 'Hi, my name {0}, my email is {1} and this is my message: "{2}"'.format(your_name, your_email, your_message)
                try:
                    send_mail(your_name, text, your_email, recipients)
                except BadHeaderError:
                    return JsonResponse({"error": 'Invalid header found.'})
                return JsonResponse({"message": 'Your message successfully sent.'})
            else:
                return JsonResponse({"message": 'Make sure all fields are entered and valid.'})
        else:
            return JsonResponse({"message": 'Make sure all fields are entered and valid.'})
    else:
        form = ContactForm()

    if mobile(request):
        return render(request, 'blog/main_mobile.html')
    else:
        return render(request, 'blog/main.html')

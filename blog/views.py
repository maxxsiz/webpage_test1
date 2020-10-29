from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Reso
from .forms import ResoForm

def main(request):
    if request.method == 'POST':
        form = ResoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect(main)
        else:
            return redirect(main)
            
    res = Reso.objects.all()
    form = ResoForm()
    context = {
        'title':'Main blog',
        'res':res,
        'form': form,
         }
        
    return render(request, 'blog/main.html', context)

def gallery(request):
    return render(request, 'blog/gallery.html')

def projects(request):
    return render(request, 'blog/projects.html')

def skills(request):
    return render(request, 'blog/skills.html')

def hobbies(request):
    return render(request, 'blog/hobbies.html')
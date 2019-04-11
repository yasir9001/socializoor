from django.shortcuts import render

def index(request, path=''):
    """
    The home page. This renders the container for the single-page app.
    """
    return render(request, 'index.html')
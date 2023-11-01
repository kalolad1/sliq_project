from django.http import HttpResponse, HttpRequest

def home(request: HttpRequest) -> HttpResponse:
    return HttpResponse(
        "Sliq interview project"
    )

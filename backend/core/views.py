import base64
import requests

from django.http import HttpResponse, HttpRequest
from rest_framework.decorators import api_view

API_URL = (
    "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image"
)


def home(request: HttpRequest) -> HttpResponse:
    return HttpResponse("Sliq interview project")


@api_view(["POST"])
def generate_image(request: HttpRequest) -> HttpResponse:
    body = {
        "steps": 40,
        "width": request.data["width"],
        "height": request.data["height"],
        "seed": 0,
        "cfg_scale": 5,
        "samples": 1,
        "text_prompts": [
            {"text": request.data["prompt"], "weight": 1},
        ],
    }

    headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer sk-Q9L3d9FItaFny16KjDMIf42oBHvvrx5NdnkEoP7HNmPotUZR",
    }

    response = requests.post(
        API_URL,
        headers=headers,
        json=body,
    )

    if response.status_code != 200:
        raise Exception("Non-200 response: " + str(response.text))

    data = response.json()
    for i, image in enumerate(data["artifacts"]):
        image_result = base64.b64decode(image["base64"])

    return HttpResponse(image_result, content_type="image/png")

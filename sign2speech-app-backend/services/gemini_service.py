import google.generativeai as genai
from config import settings

genai.configure(api_key=settings.GOOGLE_API_KEY)

def generate_description_from_image(image_data: bytes, mime_type: str) -> str:
    """
    Usa el modelo Gemini 2.5 Pro para describir la seña contenida en una imagen.
    """
    model = genai.GenerativeModel("gemini-2.5-pro-exp-03-25")

    image_part = {
        "mime_type": mime_type,
        "data": image_data
    }

    prompt_text = "Describe qué letra o palabra representa la seña de la imagen."

    try:
        response = model.generate_content([image_part, prompt_text])
        return response.text
    except Exception as e:
        raise RuntimeError(f"Error al procesar imagen con Gemini: {str(e)}")
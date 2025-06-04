from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse
from services.gemini_service import generate_description_from_image
from utils.file_validation import validate_image
from schemas.response import ImageDescriptionResponse

app = FastAPI(title="API de Procesamiento de Imágenes con Gemini 2.5 Pro")

@app.post("/process-image", response_model=ImageDescriptionResponse)
async def process_image(file: UploadFile = File(...)):
    """
    Procesa una imagen subida y genera una descripción de la seña.
    """
    validate_image(file)

    try:
        image_data = await file.read()
        description = generate_description_from_image(image_data, file.content_type)
        return ImageDescriptionResponse(description=description)
    except RuntimeError as e:
        raise HTTPException(status_code=500, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error interno del servidor")
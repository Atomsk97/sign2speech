from fastapi import UploadFile, HTTPException

ALLOWED_MIME_TYPES = {"image/jpeg", "image/png"}

def validate_image(file: UploadFile):
    if file.content_type not in ALLOWED_MIME_TYPES:
        raise HTTPException(status_code=400, detail="Tipo de imagen no soportado. Usa JPEG o PNG.")
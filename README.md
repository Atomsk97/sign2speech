# Proyecto de Traductor de lenguaje de señas a texto y/o voz en idioma español

El fin de este proyecto es de desarrollar un traductor que convierte el lenguaje de señas a texto y/o voz en español y viceversa.

Está diseñado para facilitar la comunicación con las personas con discapacidad auditiva y usan lenguaje de señas para comunicarse.

## Características

- **Reconocimiento del lenguaje de señas**: Detecta e interpreta los gestos del lenguaje de señas.
- **Salida de Texto**: Convierte los gestos reconocidos en texto en español.
- **Salida de Voz**: De la salida de texto, se reproduce una voz que lee el mensaje de señas traducido al español.

## Prerequisitos

1. Node.js con npm ([*](https://nodejs.org/en/download))

2. Android Debug Bridge ([adb](https://developer.android.com/tools/adb?hl=es-419))

3. Dispositivo con sistema operativo Android 9+ (físico o emulador)

4. Python 3.10

## Instalación

1. Clonar el repositorio:
```shell
git clone https://github.com/Atomsk97/sign2speech.git
```

Nota: Si se está clonando en un sistema operativo Windows, debido a las limitaciones de nombres de rutas (no pueden ser mayores a 255) se recomienda alojar el proyecto en una carpeta cuya ruta sea lo más corta posible (de preferencia menor a 30 caracteres)

2. Navegar al directorio del proyecto:
```shell
cd sign2speech
```

3. Instalación del aplicativo:

    1. Navegar al directorio del aplicativo:
    ```shell
    cd app
    ```
    2. Instalar las dependencias:
    ```shell
    npm install
    ```

    3. Inicializar el emulador Android o conectar por USB un dispositivo Android, deben de estar habilitado las opciones de depuración USB e instalación de aplicativos por USB

    4. Ejecutar el proyecto:
    ```shell
    npx expo run:android
    ```
    
* La primera vez puede tomar varios minutos en buildearse el aplicativo, algunos dispositivos requieren de confirmaciones adicionales por parte del usuario para que pueda instalarse el aplicativo.

4. Instalación del servidor:
    1. Navegar al directorio del servidor:
    ```shell
    cd sign2speech-app-backend
    ```
    2. Instalar las dependencias (se recomienda crear un entorno virtual para este punto)
    ```shell
    pip install -r requirements.txt
    ```
    3. Colocar la API key del LLM en el archivo [.env.example](./sign2speech-app-backend/.env.example)

    4. Levantar el servidor:
    ```shell
    python main.py
    ```

### License
This project is licensed under the MIT LICENSE. See the [LICENSE](./LICENSE) file for details.
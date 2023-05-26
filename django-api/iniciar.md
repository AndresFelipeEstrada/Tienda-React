## instalar entorno virtual
sudo apt install python3-virtualenv

## para iniciar un entorno 
 source venv/bin/activate

## o tambien 
select interpreter con control + shift + p

## saber la version de django
django-admin --version

## para iniciar un projecto
django-admin startproject 'nombre' .

## iniciar servidor
python manage.py runserver 'puerto opcional'

## comandos basicos
python manage.py --help

## crea una aplicacion dentro de django
python manage.py startapp productos

## hacer una migracion para la app
python manage.py migrate 'nombre_carpeta'

## instalar Django Rest-Framework
pip install djangorestframework

## para comunicar nuestro backend con el frontend
## Acturiza a nuestro servidor para conectarse con el frontend
pip install django-cors-headers

# crear tabla o modelos
python manage.py makemigrations productos

# crear un super usuario
python manage.py createsuperuser
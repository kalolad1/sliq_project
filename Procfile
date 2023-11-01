release: python ./backend/manage.py migrate
web: gunicorn --chdir backend sliq_project.wsgi

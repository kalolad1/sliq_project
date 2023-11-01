python backend/manage.py makemigrations
python backend/manage.py migrate
pip install -r requirements.txt
nohup python backend/manage.py runserver >/dev/null 2>&1 &
cd frontend && npm install && npm run dev
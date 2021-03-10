# Mindspark
## Project for Makeathon 3077 (2020)
## Frontend hosted at https://udbhav18.github.io
### Portal for specially abled people to create a profile and apply for jobs

- Face Recognition login
- speech to text for supported browsers
- Automatic validation of UDID through Indian Govt.'s official database (http://www.swavlambancard.gov.in/pwd/searchapplication)

# Setup
#### cd to the frontend folder and run the following commands to start the react server at http://localhost:3000 -
- `npn install`
- `npm start`

#### cd to the backend folder and run the following commands to start the django server at http://localhost:8000 -
- `pip install virtual env`
- `virtualenv env`
- `env\Scripts\activate`
- `pip install .\face_recog_dlib_file-master\dlib-19.19.0-cp38-cp38-win_amd64.whl`
- `pip install -r requirements.txt`
- `cd src`
- `python manage.py makemigrations`
- `python manage.py migrate`
- `python manage.py runserver`

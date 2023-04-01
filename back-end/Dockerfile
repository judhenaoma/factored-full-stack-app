FROM python:3-slim-buster

RUN mkdir /code

WORKDIR /code

RUN apt-get update \
    && apt-get -y install libpq-dev postgresql postgresql-contrib gcc

RUN pip install --upgrade pip

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

CMD ["uvicorn", "main:app", "--host=0.0.0.0", "--port=8000"]
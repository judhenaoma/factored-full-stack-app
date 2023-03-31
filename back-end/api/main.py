from fastapi import FastAPI, status, Form
from db import models 
from db.connection import Session_factory
from serializers import Employee, Login

app = FastAPI()
api_session = Session_factory()

@app.get("/employee-detail/{id_}", response_model=Employee, status_code=status.HTTP_200_OK)
def get_profile(id_: str):
    employee_data = api_session.query(models.Employee).filter(models.Employee.id==id_).first()
    return employee_data


@app.post("/login/")
def login(id: str = Form(), password: str = Form()):
    user = api_session.query(models.Employee).filter(models.Employee.id==id).first()
    if not user: return {"message": "not found"} 
    if user.password == password:
        return {"authorized": True}
    return {"authorized": False}

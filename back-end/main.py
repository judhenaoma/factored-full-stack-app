from fastapi import FastAPI, status, Form
from db.models import Employee as EmployeeModel
from db.models import Session_factory
from api.serializers import Employee
from fastapi.middleware.cors import CORSMiddleware
from db.models import SkillPerEmployee as SkillPerEmployeeModel
from db.models import Position as PositionModel
from db.models import Skill as SkillModel
from fastapi.encoders import jsonable_encoder

app = FastAPI()

# Configure CORS to allow fe integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api_session = Session_factory()

# get all details of a single employee with the id
@app.get("/employee-details/{id_}", status_code=status.HTTP_200_OK)
def get_profile(id_: str):
    employee_data = api_session.query(EmployeeModel).filter(EmployeeModel.id==id_).first()
    position_id = employee_data.position_id
    position = api_session.query(PositionModel.position_name).filter(PositionModel.id==position_id).first()
    employee_position = position[0]
    print(type(position))
    return {"employee_data": employee_data, 
            "employee_position" : employee_position}

# check authorization for employee login
@app.post("/login/")
def login(email: str = Form(), password: str = Form()):
    user = api_session.query(EmployeeModel).filter(EmployeeModel.email==email).first()
    if not user: return {"message": "not found", "error": status.HTTP_404_NOT_FOUND} 
    if user.password == password:
        return {"authorized": True, "id": user.id}
    return {"authorized": False}

# get all skills of an employee with the id
@app.get("/employee-skills/{id_}", status_code=status.HTTP_200_OK)
def get_skills(id_: str):
    skills = api_session.query(SkillPerEmployeeModel.profiency_level,SkillModel.skill_name).join(SkillModel).filter(SkillPerEmployeeModel.employee_id==id_).all()
    dict_data = dict(map(lambda x: (x[1], x[0]), skills))
    return {"skills": dict_data}
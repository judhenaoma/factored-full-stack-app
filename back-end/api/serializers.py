from pydantic import BaseModel

class Employee(BaseModel):
    id: str
    email: str
    first_name: str
    last_name: str
    password: str
    phone_number: str
    avatar_url: str
    position_id: int

    class Config:
        orm_mode = True

class SkillPerEmployee(BaseModel):
    id: int
    employee_id: str
    skill_id: int
    profiency_level: int

    class Config:
        orm_mode = True
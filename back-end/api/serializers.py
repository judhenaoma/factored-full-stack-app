from pydantic import BaseModel

class Position(BaseModel):
    id: int
    position_name: str

    class Config:
        orm_mode = True

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

class Login(BaseModel):
    id: str
    password: str
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

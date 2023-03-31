from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.orm import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os

load_dotenv()
DATABASE_URL = os.environ.get('DATABASE_URL')

# create the root object to connect to the db
engine = create_engine(DATABASE_URL, echo=True)
# create the instance to build sessions 
Session_factory = sessionmaker(bind=engine)



# create the base class for the models
Base = declarative_base()

class Position(Base):
    __tablename__ = 'position'

    id = Column(Integer, primary_key=True)
    position_name = Column(String(50), nullable=False)

class Employee(Base):
    __tablename__ = 'employee'
    id = Column(String(30), primary_key=True)
    email = Column(String(50), nullable=False)
    first_name = Column(String(30), nullable=False)
    last_name = Column(String(30), nullable=False)
    password = Column(String(50), nullable=False)
    phone_number = Column(String(50), nullable=False)
    avatar_url = Column(String(250), nullable=False)
    position_id = Column(Integer, ForeignKey('position.id'))
    position = relationship("Position", backref="employees")

class Skill(Base):
    __tablename__ = 'skill'
    id = Column(Integer, primary_key=True, autoincrement=True)
    skill_name = Column(String(30), nullable=False)

class SkillPerEmployee(Base):
    __tablename__ = 'skill_per_employee'
    id = Column(Integer, primary_key=True)
    employee_id = Column(String(30), ForeignKey('employee.id'))
    skill_id = Column(Integer, ForeignKey('skill.id'))
    profiency_level = Column(Integer, nullable=False)
    employee = relationship("Employee", backref="skills")
    skill = relationship("Skill", backref="employees")

if __name__ == "__main__":
    Base.metadata.create_all(engine, checkfirst=True)

from models import Position, Employee, Skill, SkillPerEmployee
from connection import Session_factory

# insert dummy positions
positions = [
    Position(id=1, position_name='Data Engineer'),
    Position(id=2, position_name='Data Scientist'),
    Position(id=3, position_name='Fullstack Engineer')
]

# insert employees, me and dummy data
employees = [
    Employee(
        id='1036671057',
        email='judhenaoma@unal.edu.co',
        first_name='Juan David',
        last_name='Henao Marín',
        password='pass123',
        phone_number='3042962660',
        avatar_url='https://api.dicebear.com/6.x/bottts/svg?size=200&backgroundColor=65b4c3,c4d1d9,a2cfdd&eyes=shade01&face=square03&mouth=smile01&baseColor=dee577&backgroundType=gradientLinear',
        position_id=3,
    ),
    Employee(
        id='1234567890',
        email='anamaria123@factored.com',
        first_name='Ana María',
        last_name='González',
        password='pass1234',
        phone_number='1234567890',
        avatar_url='https://api.dicebear.com/6.x/bottts/svg?size=200&backgroundColor=65b4c3,a2cfdd,c4d1d9&eyes=robocop&face=square04&mouth=diagram&baseColor=dee577&backgroundType=gradientLinear',
        position_id=1
    ),
    Employee(
        id='1234567891',
        email='marcosmith@factored.com',
        first_name='Marco',
        last_name='Smith',
        password='pass12345',
        phone_number='1234567891',
        avatar_url='https://api.dicebear.com/6.x/bottts/svg?size=200&backgroundColor=65b4c3,a2cfdd,c4d1d9&eyes=eva&face=round02&mouth=bite&baseColor=dee577&backgroundType=gradientLinear&radius=50',
        position_id=2
    )
]


# insert skills
skills = [
    Skill(skill_name='Python'),  # 1
    Skill(skill_name='SQL'),  # 2
    Skill(skill_name='Java'),  # 3
    Skill(skill_name='C#'),  # 4
    Skill(skill_name='C++'),  # 5
    Skill(skill_name='JavaScript'),  # 6
    Skill(skill_name='HTML'),  # 7
    Skill(skill_name='CSS'),  # 8
    Skill(skill_name='React'),  # 9
    Skill(skill_name='Tensorflow'),  # 10
    Skill(skill_name='Pytorch')  # 11
]

# insert skills per employee
skills_per_employee = [
    SkillPerEmployee(employee_id='1036671057', skill_id=1, profiency_level=80),
    SkillPerEmployee(employee_id='1036671057', skill_id=2, profiency_level=70),
    SkillPerEmployee(employee_id='1036671057', skill_id=6, profiency_level=80),
    SkillPerEmployee(employee_id='1036671057', skill_id=7, profiency_level=90),
    SkillPerEmployee(employee_id='1036671057', skill_id=8, profiency_level=80),
    SkillPerEmployee(employee_id='1234567890', skill_id=1, profiency_level=90),
    SkillPerEmployee(employee_id='1234567890', skill_id=3, profiency_level=80),
    SkillPerEmployee(employee_id='1234567890', skill_id=4, profiency_level=50),
    SkillPerEmployee(employee_id='1234567890', skill_id=10, profiency_level=100),
    SkillPerEmployee(employee_id='1234567890', skill_id=11, profiency_level=100),
    SkillPerEmployee(employee_id='1234567891', skill_id=1, profiency_level=80),
    SkillPerEmployee(employee_id='1234567891', skill_id=2, profiency_level=80),
    SkillPerEmployee(employee_id='1234567891', skill_id=3, profiency_level=80),
    SkillPerEmployee(employee_id='1234567891', skill_id=4, profiency_level=80),
    SkillPerEmployee(employee_id='1234567891', skill_id=5, profiency_level=80)
]



if __name__ == "__main__":
    # create a session
    session = Session_factory()
    # add data to the session
    session.add_all(positions)
    session.add_all(employees)
    session.add_all(skills)
    session.add_all(skills_per_employee)
    # commit added data to the db
    session.commit()



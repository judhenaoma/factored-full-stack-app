from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


DATABASE_URL = "postgresql+psycopg2://nvvifylfzmoxno:2bcebb9b0b2b3df1a284b234e8fa5616dfdb8fe8a8bd8ea3005386e07b8fe3e8@ec2-34-226-11-94.compute-1.amazonaws.com:5432/d79lhrqk4p97p7"

# create the root object to connect to the db
engine = create_engine(DATABASE_URL, echo=True)
# create the session 
Session_factory = sessionmaker(bind=engine)


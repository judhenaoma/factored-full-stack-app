from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


DATABASE_URL = "postgresql+psycopg2://xsrfcgfrlmxoqq:fcdfc073eadb0c02f076831ac0f7944a79d943c87d77201ee2a66b2b9882eee5@ec2-44-215-1-253.compute-1.amazonaws.com:5432/dbm846nrig7cj"

# create the root object to connect to the db
engine = create_engine(DATABASE_URL, echo=True)
# create the session 
Session_factory = sessionmaker(bind=engine)


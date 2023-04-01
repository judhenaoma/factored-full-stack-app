# Factored Technical Assessment
To run the application locally, Docker and Docker Compose must be installed. It can be downloaded for Windows from [docker](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe?utm_source=docker&utm_medium=webreferral&utm_campaign=dd-smartbutton&utm_location=module).

Once Docker is installed, you must clone the repository. If you have git installed, run the command git clone https://github.com/judhenaoma/factored-technical-assessment.git. Otherwise, access the link above and click on Code > Download ZIP, extract the files and navigate to the root of the extracted folder using the Windows command prompt cmd. Then execute the following commands in order:
1. `docker-compose build`. Then follows:
2. `docker-compose up`

Note that the database is currently running remotely, although the build in the docker-compose.yml file is configured for a local database. For simplicity, I chose to have the database running remotely with the data.

Once the application containers have finished being created, you can access the following link in your browser: http://localhost:3000/, where the application will be running.

Here are some credentials to access the application:

| email      | password |
| ----------- | ----------- |
| judhenaoma@unal.edu.co      | pass123       |
| anamaria123@factored.com   | pass1234          |
| marcosmith@factored.com   | pass12345          |

Some notes:

The files located in back-end/db: models., and insertion.py are responsible for creating the database in SQLAlchemy. They were used to build the database that is currently connected remotely. You can create the database by running python models.py and python insertion.py in an empty database locally.
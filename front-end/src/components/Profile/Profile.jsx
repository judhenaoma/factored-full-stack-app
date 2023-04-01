import React from "react";
import { useFetch } from "../../hooks/useFetchData";
import { SpiderChart } from "./SpiderChart";
import { useNavigate } from "react-router-dom";

function Profile({ employeeID, setLoggedIn }) {
    const navigate = useNavigate();
    const [employee, employeeError, loadingEmployee ] =  useFetch(`http://localhost:8000/employee-details/${employeeID}/`, 'factoredLSEmployee')
    const [skills, skillsError, load ] =  useFetch(`http://localhost:8000/employee-skills/${employeeID}/`, 'factoredLSSkills' )
    console.log(skills)
    const employeeData = employee?.employee_data
    const employeePosition = employee?.employee_position
    const employeeSkills = skills?.skills

    const skillsName = employeeSkills && Object.keys(employeeSkills)
    const skillsProfiency = employeeSkills && Object.values(employeeSkills)

    const handleCloseSession = () => {
        localStorage.removeItem('FactoredSession')
        localStorage.removeItem('factoredLSEmployee')
        localStorage.removeItem('factoredLSSkills')
        setLoggedIn(false)
        navigate('/login')
    }
    return(
       <> 
            {loadingEmployee ? <div>Cargando...</div> : (
            <div className="profile_content">
                <h1>Wellcome, {employeeData?.first_name}</h1>
                <p>ID: {employeeData?.id}</p>
                <p>First name: {employeeData?.first_name}</p>
                <p>Last name: {employeeData?.last_name}</p>
                <p>Email: {employeeData?.email}</p>
                <p>Phone: {employeeData?.phone_number}</p>
                <img src={employeeData?.avatar_url}/>
                <p>Position: {employeePosition}</p>
                <SpiderChart skills={skillsName} 
                            profiencyLevel={skillsProfiency}
                />
                <button onClick={handleCloseSession}>Log out</button>
            </div>
        )}
      </>
    )
}


export { Profile }   
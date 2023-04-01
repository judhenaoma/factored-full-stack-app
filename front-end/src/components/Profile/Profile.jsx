import React from "react";
import { useFetch } from "../../hooks/useFetchData";
import { SpiderChart } from "./SpiderChart";
import { useNavigate } from "react-router-dom";
import "./profile.css";

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
            <div id="profile_content">
                <div className="profile_left">
                    <h1>Welcome, {employeeData?.first_name}</h1>
                    <img className="avatar_img" src={employeeData?.avatar_url}/>    
                </div>
                
                <div id="personal_data">
                    <p>ID: {employeeData?.id}</p>
                    <p>First name: {employeeData?.first_name}</p>
                    <p>Last name: {employeeData?.last_name}</p>
                    <p>Email: {employeeData?.email}</p>
                    <p>Phone: {employeeData?.phone_number}</p>
                    <p>Position: {employeePosition}</p>
                </div>
                <div className="spider_chart">
                    <SpiderChart skills={skillsName} 
                                profiencyLevel={skillsProfiency}
                    />
                </div>
                
            </div>
        )}
        <button className="loggout_icon" onClick={handleCloseSession}>Log out</button>
      </>
    )
}


export { Profile }   
import React from "react";
import { useFetch } from "../../hooks/useFetchData";
import { SpiderChar } from "../../components/SpiderChart";

function Profile({ employeeID }) {
    const [employee, employeeError, loadingEmployee ] =  useFetch(`http://localhost:8000/employee-details/${employeeID}/`)
    const [skills, skillsError, load ] =  useFetch(`http://localhost:8000/employee-skills/${employeeID}/`)
    console.log(skills)
    const employeeData = employee?.employee_data
    const employeePosition = employee?.employee_position
    const employeeSkills = skills?.skills

    const skillsName = employeeSkills && Object.keys(employeeSkills)
    const skillsProfiency = employeeSkills && Object.values(employeeSkills)

    return(
       <> 
            {loadingEmployee ? <div>Cargando...</div> : (
            <div className="profile_content">
                <h1>Wellcome, {employeeData?.first_name}</h1>
                <p>id: {employeeData?.id}</p>
                <p>first_name: {employeeData?.first_name}</p>
                <p>last_name: {employeeData?.last_name}</p>
                <p>email: {employeeData?.email}</p>
                <p>phone_name: {employeeData?.phone_name}</p>
                <img src={employeeData?.avatar_url}/>
                <p>position_id: {employeeData?.position_id}</p>
                <SpiderChar skills={skillsName} profiencyLevel={skillsProfiency}/>
            </div>
            
        )}
      </>
    )
}

export { Profile }  
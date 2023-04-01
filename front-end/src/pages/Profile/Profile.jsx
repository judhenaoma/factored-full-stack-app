import React from "react";
import { useFetch } from "../../hooks/useFetchData";

function Profile({ employeeID }) {
    const {data, error, loading } =  useFetch(`http://localhost:8000/employee-details/${employeeID}/`)
    const employeeData = data?.employee_data
    const employeePosition = data?.employee_position
    return(
       <> 
            {loading ? <div>Cargando...</div> : (
            <div className="profile_content">
                <h1>Wellcome, {employeeData?.first_name}</h1>
                <p>id: {employeeData?.id}</p>
                <p>first_name: {employeeData?.first_name}</p>
                <p>last_name: {employeeData?.last_name}</p>
                <p>email: {employeeData?.email}</p>
                <p>phone_name: {employeeData?.phone_name}</p>
                <img src={employeeData?.avatar_url}/>
                <p>position_id: {employeeData?.position_id}</p>
            </div>
        )}
      </>
    )
}

export { Profile }  
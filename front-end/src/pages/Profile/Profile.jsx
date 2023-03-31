import React from "react";
import { useState } from "react";

function Profile() {
    const [data, setData] = useState({
        id: '',
        first_name: 'prubea',
        last_name: 's',
        email: '',
        phone_name: '',
        avatar_url: '',
        position_id : ''
    })

    return(
        <div className="profile_content">
            <h1>Profile</h1>
            <p>id: {data.id}</p>
            <p>first_name: {data.first_name}</p>
            <p>last_name: {data.last_name}</p>
            <p>email: {data.email}</p>
            <p>phone_name: {data.phone_name}</p>
            <p>avatar_url: {data.avatar_url}</p>
            <p>position_id: {data.position_id}</p>
        </div>
    )
}

export { Profile }  
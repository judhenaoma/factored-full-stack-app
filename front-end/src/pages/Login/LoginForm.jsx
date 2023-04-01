import React, { useState } from 'react';
import axios from 'axios';
import './login.css';


function LoginForm( {setCredentials, setLoggedIn } ) {
    
  const [fields, setFields] = useState({email: '', password: ''});
  const [error, setError] = useState('')
  // Handle when the user types in the form
  const handleChange = (e) => {
    setFields({
        ...fields,
        [e.target.name]: e.target.value
    })
    console.log(e.target.value)
  }

  // Handle the login form submission and check credentials
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    // The backend is expecting a form data object
    let formFormat = new FormData();
    formFormat.append('email', fields.email);
    formFormat.append('password', fields.password);
    axios.post('http://localhost:8000/login/', formFormat)
      .then((response) => {
        const { data } = response;	
        if(data.authorized === true){
            setLoggedIn(true);
            setCredentials({...fields, id: data.id});      
        } 
        setError('Invalid credentials');
      })
      .catch((error) => setError('Error logging in'))
  }

  return (
    <form method='POST' onSubmit={handleSubmit} id="login_form" >
      <div className="form__field">
        <input type="email"
            name="email"
            onChange={handleChange}
            value={fields.email}
            placeholder="Email"
        />
      </div>
      <div className="form__field">
      <label htmlFor="password">Password</label>
        <input  type="password"
            name="password"
            onChange={handleChange}
            value={fields.password}
            placeholder="Password"
        />
      </div>
      {error && <strong>{error}</strong>}
      <div>
        <button type="submit">
          Login
        </button>
      </div>
    </form>
  );
}

export { LoginForm }

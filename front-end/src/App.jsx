import { useState, useEffect } from 'react'
import './App.css'
import  { LoginForm } from './components/Login/LoginForm'
import { LoginPage } from './components/Login/LoginPage'
import { Routes, Route } from 'react-router-dom';
import { Profile } from './components/Profile/Profile';
import { Redirect } from './components/utils/Redirect';
import { ErrorPage } from './components/Error/ErrorPage';
import { NotFoundPage } from './components/NotFound/NotFoundPage';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function App() {

  // React Router helpers
  const location = useLocation();
  const navigate = useNavigate();
  // App state 
  const [credentials, setCredentials] = useState({
      email: '',
      password: '',
      id: ''
    })
  const [loggedIn, setLoggedIn] = useState(false);

  // Check if the user is currently logged in (local persistence)
  useEffect(() => {
    const session = JSON.parse(localStorage.getItem('FactoredSession'));
    if (session) {
      setLoggedIn(true);
      setCredentials({...credentials, id: session});
    }
  }, [])

  // Keep the user on the profile page if is logged in and 
  // tries to access the login page
  useEffect(() => {
    if(loggedIn && location.pathname === '/login'){
        navigate('/profile')
    }
}, [loggedIn])    


  return (
    <div>
      <Routes>
        <Route path="/" 
               element={ <Redirect to="/login" />}
               errorElement={<ErrorPage/>} 
        />  
        <Route path="login" 
               element=
               {
                  <LoginPage>
                    <LoginForm setCredentials={setCredentials} setLoggedIn= {setLoggedIn}  />
                  </LoginPage>
                }
               errorElement={<ErrorPage/>} 
        />
        <Route path="profile" 
            element={ loggedIn && <Profile employeeID={credentials.id} setLoggedIn={setLoggedIn} />}
            errorElement={<ErrorPage/>} 
                
        />
        <Route path="*" 
        element={<NotFoundPage/>} />
      </Routes>
    </div>
  )
}

export { App }

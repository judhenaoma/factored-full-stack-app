import { useState, useEffect } from 'react'
import './App.css'
import { LoginForm } from './pages/Login/LoginForm'
import { LoginPage } from './pages/Login/LoginPage'
import { Routes, Route } from 'react-router-dom';
import { Profile } from './pages/Profile/Profile';
import { Redirect } from './components/Redirect';
import { ErrorPage } from './pages/Error/ErrorPage';
import { NotFoundPage } from './pages/NotFound/NotFoundPage';
import { useNavigate } from 'react-router-dom';

function App() {
  
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
      email: '',
      password: '',
      id: ''
    })
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    loggedIn && navigate('/profile')
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
            element={ loggedIn && <Profile employeeID={credentials.id} />}
            errorElement={<ErrorPage/>} 
                
        />
        <Route path="*" 
        element={<NotFoundPage/>} />
      </Routes>
    </div>
  )
}

export { App }

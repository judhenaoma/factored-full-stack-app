import { useState } from 'react'
import './App.css'
import { LoginForm } from './pages/Login/LoginForm'
import { LoginPage } from './pages/Login/LoginPage'
import { Routes, Route } from 'react-router-dom';
import { Profile } from './pages/Profile/Profile';
import { Redirect } from './components/Redirect';

function App() {

  const [credentials, setCredentials] = useState({
                                          email: '',
                                          password: '',
                                          id: ''
                                        })
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <Routes>
        <Route path="/" element={ <Redirect to="/login" />}/>
        <Route path="login" element={<LoginPage setCredentials={setCredentials} setLoggedIn={setLoggedIn} />} />
        <Route path="profile" element={<Profile/>} />
      </Routes>
    </div>
  )
}

export { App }

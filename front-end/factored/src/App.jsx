import { useState } from 'react'
import './App.css'
import { LoginForm } from './Pages/Login/LoginForm'
import axios from 'axios';

function App() {

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(loggedIn)



  return (
    <div className="App">
      <LoginForm setCredentials={setCredentials}
                 setLoggedIn={setLoggedIn}
      />
    </div>
  )
}

export default App

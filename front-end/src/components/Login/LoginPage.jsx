import React from 'react';
import './login.css';
import { LoginForm } from './LoginForm';
import factoredLogo from '../../assets/factored_logo.png';

function LoginPage({setCredentials, setLoggedIn, children }) {
  return (
    <div id='login'>
        <div id='login__content'>
            <div>
                <img className='login__content-logo' src={factoredLogo} alt='Factored Logo' />  
            </div>
            <div id='login__content__form'>
                {children}
            </div>    
        </div>
    </div>
  );
}

export { LoginPage };
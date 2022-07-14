import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { auth } from './firebase';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate('/');
        }
      })
      .catch((error) => alert(error.message));
  };

  const signUp = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // account created, returns an object auth
        // console.log(auth);
        if (auth) {
          navigate('/'); // helps change url
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className='login'>
      <Link to='/'>
        <img className='login_logo' src='/images/amazon-logo2.png' alt='' />
      </Link>

      <div className='login_container'>
        <h1>Sign In</h1>
        <form action=''>
          <h5>Email</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type='submit' className='login_button' onClick={signIn}>
            Login
          </button>
        </form>
        <div className='form_content'>
          <p>
            By continuing, you agree to Amazon's{' '}
            <span style={{ color: '#5b62f5' }}>Conditions of Use</span> and{' '}
            <span style={{ color: '#5b62f5' }}>Privacy Notice.</span>
          </p>
          <p className='form_content_help'>
            <ArrowRightIcon className='arrow_right' fontSize='small' />
            <span style={{ color: '#5b62f5' }}>Need Help?</span>
          </p>
        </div>
      </div>

      <div className='signup_container'>
        <p>
          <span>New To Amazon?</span>
        </p>
        <button onClick={signUp} className='signup_button'>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;

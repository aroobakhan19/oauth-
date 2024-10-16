import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'; // Named import for jwtDecode
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const Login = () => {
  const navigate = useNavigate();
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 500 } });

  const handleLoginSuccess = (credentialResponse) => {
    console.log('Credential Response:', credentialResponse); // Log the response
    try {
      const user = jwtDecode(credentialResponse.credential); // Use jwtDecode function
      console.log('Decoded User:', user); // Log the decoded user
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/home');
    } catch (error) {
      console.error('Failed to decode JWT:', error);
    }
  };
  

  const handleLoginFailure = (error) => {
    console.error('Login Failed:', error);
  };

  return (
    <animated.div style={props} className="login-container">
      <h1>Login</h1>
      <GoogleLogin 
        onSuccess={handleLoginSuccess} 
        onFailure={handleLoginFailure} 
      />
    </animated.div>
  );
};

export default Login;

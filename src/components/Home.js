import React from 'react';
import { useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google'; // Correct import for googleLogout
import { useSpring, animated } from 'react-spring';

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 500 } });

  const handleLogout = () => {
    localStorage.removeItem('user');
    googleLogout(); // Call googleLogout function
    navigate('/'); // Redirect to login page after logout
  };

  return (
    <animated.div style={props} className="home-container">
      {user ? (
        <>
          <h1>Welcome, {user.name}!</h1>
          <img src={user.picture} alt={user.name} />
     <p>Great to see you again! Ready to dive in and make the most of your day?</p>
          <button onClick={handleLogout}>Logout</button> {/* Use a button for logout */}
        </>
      ) : (
        <h2>Please log in</h2>
      )}
    </animated.div>
  );
};

export default Home;

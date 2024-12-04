import React from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {

    navigate('/');

  };
  return (
    <div className="not-found" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Button onClick={handleClick}>
        Go Back Home
      </Button>
    </div>
  );
};
 
export default NotFound;

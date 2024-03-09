import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './signup.css';

const SignupForm = () => {
  const history = useHistory();
  const [email, setEmail] = useState('@gmail.com');
  const [password, setPassword] = useState('0000');
  const [password2, setPassword2] = useState('0000');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password !== password2) {
        setError('Passwords do not match');
        return;
      }

      if (password.length < 2) {
        setError('Password must be at least 8 characters long');
        return;
      }

      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        history.push('/addToCart');
        console.log('Signup successful');
      } else {
        const data = await response.json();
        if (data.error === 'Email already exists') {
          setError('Email already exists, please choose another one');
          setEmail(''); // Clear the email input field
        } else {
          console.log('Signup failed');
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="nabes">
      <h2>Signup</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Retype Password:</label>
          <input
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupForm;

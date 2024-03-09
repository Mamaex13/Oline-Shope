import React, { useState } from 'react';
import './partner.css';
  const PartnerForm = () => {
  const [partnertype, ] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('@gmail.com');
  const [password, setPassword] = useState('00000000');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', name,partnertype,email, password);
    // Reset form fields
    setEmail('@gmail.com');
    setPassword('00000000');
  };

  return (
    <div className="login-form-container">
      <h3>Become Partner</h3>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label className='label'>Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />
        </div>
        <div>
        <label>
        Partner Type:
        <select value={partnertype}  onChange={(e)=>setPassword(e.target.value)}
            required>
          <option value="option1">Agent</option>
          <option value="option2">Axsiyon Shere</option>
          <option value="option3">custemer</option>
        </select>
      </label>
        </div>
        <div className="form-group">
          <label className='label'>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className='label'>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      
    </div>
 
    
   
  );
};

export default PartnerForm;
 
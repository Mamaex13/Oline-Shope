import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './home.css';

const Component = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="title">The Market</h2>
      {data.map((item) => (
        <NavLink key={item._id} to={`/${item.name}`} className="item-link">
          <div key={item._id} className="item">
            {item.image && (
              <div className="img">
                <img src={item.image} alt="Uploaded" />
              </div>
            )}
            <div>
              <strong>{item.name}</strong>
            </div>
            <div className="description">
              <strong>Description:</strong> {item.description}
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Component;

// AddToCart.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './addToCart.css';

const AddToCat = () => {
  const [data, setData] = useState([]);
  const [countMap, setCountMap] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/product');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const incrementCounter = async (id) => {
    try {
      const response = await axios.post(`http://localhost:5000/increment/${id}`);
      setCountMap({ ...countMap, [id]: response.data.count });
    } catch (error) {
      console.error('Error incrementing counter:', error);
    }
  };

  const decrementCounter = async (id) => {
    try {
      const response = await axios.post(`http://localhost:5000/decrement/${id}`);
      setCountMap({ ...countMap, [id]: response.data.count });
    } catch (error) {
      console.error('Error decrementing counter:', error);
    }
  };

  const handleBuy = async (id) => {
    try {
      await axios.post(`http://localhost:5000/product/${id}`);
      setCountMap({ ...countMap, [id]: 0 });
      fetchData();
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <div className='container_buy'>     
      <div className='display_imput'>
        <div className='together'>
          <ul>
            {data.map((item) => (
              <li key={item._id} className="data-item">
                <div className='image'>
                  {item.image && (
                    <div className='img'>
                      <img src={item.image} alt="Uploaded" />
                    </div>
                  )}
                </div>
                <div className='allabout'>
                  <div className='name'>
                    <strong>{item.name}</strong> 
                  </div>
                  <div className='price'>
                    <strong>Price:</strong> <strong className='price'>{item.price}</strong><strong>Birr</strong>
                  </div>
                  <div className='stack'>
                    <strong>Available:</strong><strong className='stackQ'>{item.stack}</strong> <strong>Kg</strong>
                  </div>
                </div>
                <button onClick={() => incrementCounter(item._id)} className='incrementBtn'>+</button>
                <button className='counterBtn'>{countMap[item._id] || 0}</button>
                <button onClick={() => decrementCounter(item._id)} className='decrementBtn'>-</button>
                <button onClick={() => handleBuy(item._id)} className='buyBtn'>add</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddToCat;

// SearchInput.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './addToCart.css';

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [countMap, setCountMap] = useState({});

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/product/${searchTerm}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const addToCart = async (item) => {
    try {
      const { name, price, } = item;
      const amount = countMap[item._id] || 0;
      await axios.post('http://localhost:5000/cart', { name, price, amount });
      setCountMap({ ...countMap, [item._id]: 0 });
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const incrementCounter = (id) => {
    setCountMap({ ...countMap, [id]: (countMap[id] || 0) + 1 });
  };

  const decrementCounter = (id) => {
    if (countMap[id] > 0) {
      setCountMap({ ...countMap, [id]: countMap[id] - 1 });
    }
  };

  return (
    <div className='container_buy'>
      <div className="search-input">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className='display_input'>
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
                    <strong>Price:</strong> <span className='price'>{item.price}</span><span>Birr</span>
                  </div>
                  <div className='stack'>
                    <strong>Available:</strong><span className='stackQ'>{item.stack}</span> <span>Kg</span>
                  </div>
                </div>
                <button onClick={() => incrementCounter(item._id)} className='incrementBtn'>+</button>
                <button className='counterBtn'>{countMap[item._id] || 0}</button>
                <button onClick={() => decrementCounter(item._id)} className='decrementBtn'>-</button>
                <button onClick={() => addToCart(item)} className='buyBtn'>Add to Cart</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchInput;

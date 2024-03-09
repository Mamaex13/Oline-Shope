import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './cat.css';

const Component = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ name: '', category: '', description: '', image: null });

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

  const handleInputChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataWithImage = new FormData();
    formDataWithImage.append('name', formData.name);
    formDataWithImage.append('category', formData.category);
    formDataWithImage.append('description', formData.description);
    formDataWithImage.append('image', formData.image);
  
    try {
      await axios.post('http://localhost:5000/data', formDataWithImage);
      setFormData({ name: '', category: '', description: '', image: null });
      fetchData();
    } catch (error) {
      console.error('Error creating data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/data/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div className='container'>
      <div className="imput-form">
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className='imput-form-imputs' >
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input type="file" name="image" onChange={handleInputChange} />
        </div>
        <button type="submit">Create</button>
      </form>
      </div>
<div className='display_imput'>
      <h2>Data List</h2>
      <div className='together'>
        <ul>
          {data.map((item) => (
            <li key={item._id} className="data-item">
              {item.image && (
                <div className='img'>
                  <img src={item.image} alt="Uploaded" />
                </div>
              )}
              <div>
                <strong>Name:</strong> {item.name}
              </div>
              <div>
                <strong>Category:</strong> {item.category}
              </div>
              <div>
                <strong>Description:</strong> {item.description}
              </div>
              <button onClick={() => handleDelete(item._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Component;

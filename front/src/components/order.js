// client/src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
 

  
  return (
    <div>
      
      <input type="text" placeholder="Search by name" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      <div>
        {searchResult.map((image) => (
          <div key={image._id}>
            <h3>{image.name}</h3>
            <img src={image.imageUrl} alt={image.name} style={{ width: '200px', height: '200px' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

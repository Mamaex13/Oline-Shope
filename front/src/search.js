// import React, { useState, } from 'react';
// import axios from 'axios';
// import './search.css';

// function SearchInput() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     handleSearch();
//   }, []);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/product/${searchTerm}`);
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
  
//   };

//   return (
//     <div className="search-input">
//        <input type="text" 
//        placeholder="Search by name" 
//        value={searchTerm} 
//        onChange={(e) => setSearchTerm(e.target.value)} />
//       <button onClick={handleSearch}>Search</button>
     
//     </div>
//   );
// }

// export default SearchInput;

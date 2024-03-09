import axios from 'axios';

export const uploadImage = (formData) => {
  return async (dispatch) => {
    try {
      await axios.post('/api/upload', formData);
      dispatch({ type: 'UPLOAD_SUCCESS' });
    } catch (error) {
      console.error('Upload error:', error);
      dispatch({ type: 'UPLOAD_ERROR', error: error.message });
    }
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/data/list');
      dispatch({ type: 'FETCH_SUCCESS', data: response.data });
    } catch (error) {
      console.error('Fetch data error:', error);
      dispatch({ type: 'FETCH_ERROR', error: error.message });
    }
  };
};

export const deleteData = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/data/${id}`);
      dispatch({ type: 'DELETE_SUCCESS', id });
    } catch (error) {
      console.error('Delete data error:', error);
      dispatch({ type: 'DELETE_ERROR', error: error.message });
    }
  };
};

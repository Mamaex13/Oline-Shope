import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage, getImage } from './actions';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [imageId, setImageId] = useState(null);
  const dispatch = useDispatch();
  const uploadedImage = useSelector((state) => state.image.image);
  const error = useSelector((state) => state.image.error);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleImageUpload = () => {
    if (image) {
      const formData = new FormData();
      formData.append('image', image);

      dispatch(uploadImage(formData));
    }
  };

  const handleGetImage = () => {
    if (imageId) {
      dispatch(getImage(imageId));
    }
  };

  return (
    <div>
      <h2>Image Upload</h2>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload Image</button>
      {uploadedImage && (
        <div>
          <h3>Uploaded Image</h3>
          <img src={uploadedImage.imageUrl} alt="Uploaded" />
        </div>
      )}
      {error && <p>{error}</p>}
      <h2>Get Image by ID</h2>
      <input type="text" value={imageId} onChange={(e) => setImageId(e.target.value)} />
      <button onClick={handleGetImage}>Get Image</button>
      {uploadedImage && (
        <div>
          <h3>Retrieved Image</h3>
          <img src={uploadedImage.imageUrl} alt="Retrieved" />
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default ImageUpload;
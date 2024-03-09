const express = require('express');
const router = express.Router();
const { UserModel, Data, product } = require('../models/UserModel');
const multer = require('multer');
const path = require('path');

// Define Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

// Create Multer upload middleware
const upload = multer({ storage: storage });

//signup.................................................................................
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await UserModel.findOne({ email });

    if (user) {
      // User already exists, send error response
      console.log('Email already exists');
      return res.status(400).json({ error: 'Email already exists' });
    }

    // User does not exist, proceed with registration
    user = await UserModel.create({ email, password });
    
    // Send back the newly created user object in the response
    res.status(201).json(user);
  } catch (error) {
    console.error('Registration failed:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

//login.............................................................................................
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user || user.password !== password) {
      // If user not found or password doesn't match, return error
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Password matches, login successful, return user type along with success message
    res.json({ message: 'Login successful', usertype: user.usertype });
  } catch (error) {
    console.error('Login failed:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});

//add user.................................................................................
router.post('/adduser', async (req, res) => {
  const { email, password, usertype } = req.body;

  try {
    let user = await UserModel.findOne({ email });

    if (user) {
      // User already exists, send error response
      console.log('Email already exists');
      return res.status(400).json({ error: 'Email already exists' });
    }

    // User does not exist, proceed with user creation
    user = await UserModel.create({ email, password, usertype });
    
    // Send back the newly created user object in the response
    res.status(201).json(user);
  } catch (error) {
    console.error('User creation failed:', error);
    res.status(500).json({ error: 'User creation failed' });
  }
});

// Create new data
router.post('/data', upload.single('image'), async (req, res) => {
  try {
    const { name, category, description } = req.body;
    const imageUrl = `http://localhost:5000/${req.file.filename}`;
    const newData = new Data({ name, category, description, image: imageUrl });
    await newData.save();
    res.sendStatus(201);
  } catch (error) {
    console.error('Error creating data:', error);
    res.sendStatus(500);
  }
});

// Get all data
router.get('/data', async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.sendStatus(500);
  }
});

// Delete data by ID
router.delete('/data/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Data.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    console.error('Error deleting data:', error);
    res.sendStatus(500);
  }
});
//......................................................................................
// Create new product
router.post('/product', upload.single('image'), async (req, res) => {
  try {
    const { name, price, stack } = req.body;
    const imageUrl = `http://localhost:5000/${req.file.filename}`;
    const newData = new product({ name, price, stack, image: imageUrl });
    await newData.save();
    res.sendStatus(201);
  } catch (error) {
    console.error('Error creating data:', error);
    res.sendStatus(500);
  }
});

// Get all product
router.get('/product', async (req, res) => {
  try {
    const data = await product.find();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.sendStatus(500);
  }
});

// Delete product by ID
router.delete('/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await product.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    console.error('Error deleting data:', error);
    res.sendStatus(500);
  }
});
//search.......................................................
router.get('/product/:name', async (req, res) => {
  const { name } = req.params;
  const images = await product.find({ name });
  res.json(images);
});


//count buy.........................................................
let productCounts = {}; // Object to store counts for each product

router.get('/count/:productId', (req, res) => {
  const productId = req.params.productId;
  const count = productCounts[productId] || 0;
  res.json({ count });
});

router.post('/increment/:productId', (req, res) => {
  const productId = req.params.productId;
  productCounts[productId] = (productCounts[productId] || 0) + 1;
  res.json({ count: productCounts[productId] });
});

router.post('/decrement/:productId', (req, res) => {
  const productId = req.params.productId;
  productCounts[productId] = (productCounts[productId] || 0) - 1;
  res.json({ count: productCounts[productId] });
});


//add to cart..............................................
router.post('/cart', async (req, res) => {
  const { name, price, amount } = req.body;
  try {
    const newItem = new Item({
      name,
      price,
      amount
    });
    await newItem.save();
    res.status(201).json({ message: 'Item added to cart successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;

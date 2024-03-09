const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true // Set unique option to true to enforce uniqueness
  },
  password: String,
  usertype: { type: String  }
  
});

// Create a schema for the image model
const dataSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,
  image: String,
});

// Create products model
const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  stack: String,
  image: String,

});

//add to cart......................................
const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  amount: Number
});


const Item = mongoose.model('Item', itemSchema);
const product = mongoose.model('product', productSchema );
const Data = mongoose.model('Data', dataSchema);
const UserModel = mongoose.model('User', userSchema);



module.exports = { UserModel, Data, product,Item};










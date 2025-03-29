// seedProducts.js
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  {
    name: "Premium Wheat",
    category: "Grains",
    imageUrl: "https://example.com/images/premium-wheat.jpg"
  },
  {
    name: "Organic Potatoes",
    category: "Vegetables",
    imageUrl: "https://example.com/images/organic-potatoes.jpg"
  },
  {
    name: "Sweet Corn",
    category: "Vegetables",
    imageUrl: "https://example.com/images/sweet-corn.jpg"
  },
  {
    name: "Fresh Apples",
    category: "Fruits",
    imageUrl: "https://example.com/images/fresh-apples.jpg"
  },
  {
    name: "Juicy Oranges",
    category: "Fruits",
    imageUrl: "https://example.com/images/juicy-oranges.jpg"
  }
  // Add more products as needed
];

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('Connected to MongoDB Atlas');
  // Insert multiple product documents at once
  await Product.insertMany(products);
  console.log('Products inserted successfully');
  process.exit(0);
})
.catch(err => {
  console.error('Error inserting products:', err);
  process.exit(1);
});

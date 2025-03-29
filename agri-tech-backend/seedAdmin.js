// seedAdmin.js
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('Connected to MongoDB Atlas');

  const email = 'thisya@gmail.com';
  const existingAdmin = await User.findOne({ email });
  if(existingAdmin) {
    console.log('Admin already exists');
    return process.exit(0);
  }

  const hashedPassword = await bcrypt.hash('thisyanth', 10);
  const admin = new User({
    name: 'Admin',
    email: email,
    password: hashedPassword,
    role: 'admin',  // Important: set role to admin
    city: ''
  });
  
  await admin.save();
  console.log('Admin account created successfully');
  process.exit(0);
})
.catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

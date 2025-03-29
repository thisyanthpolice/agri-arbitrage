// routes/auth.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Farmer Signup
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, city } = req.body;
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if(existingUser) return res.status(400).json({ message: 'User already exists' });
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      city,
      role: 'farmer',
    });
    
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
    
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Login for both Admin and Farmer
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if(!user) return res.status(404).json({ message: 'User not found' });
    
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    
    // Generate JWT
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    
    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
        city: user.city,
      }
    });
    
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;

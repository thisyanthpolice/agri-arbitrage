// models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'farmer'], default: 'farmer' },
  city: { type: String }, // for farmers, optional for admin
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

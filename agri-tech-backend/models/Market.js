// models/Market.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const marketSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true }, // City or area name
  latitude: { type: Number, required: true }, // Latitude of the market
  longitude: { type: Number, required: true }, // Longitude of the market
  basePrice: { type: Number, required: true }, // Base price of goods
  transportCost: { type: Number, required: true }, // Transport cost to the market
  description: { type: String }, // Optional description of the market
  contactInfo: { type: String }, // Optional contact information
}, { timestamps: true });

module.exports = mongoose.model('Market', marketSchema);
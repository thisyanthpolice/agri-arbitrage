const express = require('express');
const router = express.Router();
const Market = require('../models/Market');
const { getDistance } = require('geolib');

// Fetch all markets
router.get('/all', async (req, res) => {
  try {
    const markets = await Market.find();
    res.status(200).json({ markets });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Update market details
router.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, location, basePrice, transportCost } = req.body;

    const updatedMarket = await Market.findByIdAndUpdate(
      id,
      { name, location, basePrice, transportCost },
      { new: true }
    );

    if (!updatedMarket) {
      return res.status(404).json({ message: 'Market not found' });
    }

    res.status(200).json({ message: 'Market updated successfully', market: updatedMarket });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Recommendations endpoint (unchanged)
router.get('/recommendations', async (req, res) => {
  try {
    const { lat, lng } = req.query;
    if (!lat || !lng) {
      return res.status(400).json({ message: 'Latitude and longitude are required' });
    }

    const farmerLocation = { latitude: parseFloat(lat), longitude: parseFloat(lng) };
    const markets = await Market.find();

    const recommendations = markets.map((market) => {
      const distance = getDistance(
        farmerLocation,
        { latitude: market.latitude, longitude: market.longitude }
      ) / 1000;

      const netTotalCost = market.basePrice + market.transportCost;

      return {
        name: market.name,
        location: market.location,
        latitude: market.latitude,
        longitude: market.longitude,
        basePrice: market.basePrice,
        transportCost: market.transportCost,
        distance,
        netTotalCost,
      };
    });

    const sortedRecommendations = recommendations.sort((a, b) => {
      if (a.netTotalCost === b.netTotalCost) {
        return a.distance - b.distance;
      }
      return a.netTotalCost - b.netTotalCost;
    });

    res.status(200).json({ recommendations: sortedRecommendations });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
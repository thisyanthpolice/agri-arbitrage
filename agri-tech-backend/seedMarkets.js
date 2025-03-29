require('dotenv').config();
const mongoose = require('mongoose');
const Market = require('./models/Market');

const markets = [
  {
    name: "Madurai Local Market 1",
    location: "Madurai",
    latitude: 9.939093,
    longitude: 78.121719,
    basePrice: 150,
    transportCost: 25,
  },
  {
    name: "Melur Farmers Market",
    location: "Melur (near Madurai)",
    latitude: 10.030623,
    longitude: 78.07297,
    basePrice: 120,
    transportCost: 30,
  },
  {
    name: "Tirumangalam Agri Market",
    location: "Tirumangalam (near Madurai)",
    latitude: 9.823619,
    longitude: 77.986565,
    basePrice: 180,
    transportCost: 20,
  },
  {
    name: "Usilampatti Wholesale",
    location: "Usilampatti (near Madurai)",
    latitude: 9.9694,
    longitude: 77.7862,
    basePrice: 160,
    transportCost: 28,
  },
  {
    name: "Sholavandan Market",
    location: "Sholavandan (near Madurai)",
    latitude: 10.02317,
    longitude: 78.08943,
    basePrice: 135,
    transportCost: 35,
  },
  {
    name: "Vadipatti Local Hub",
    location: "Vadipatti (near Madurai)",
    latitude: 10.04611,
    longitude: 77.798,
    basePrice: 170,
    transportCost: 22,
  },
  {
    name: "Peraiyur Market",
    location: "Peraiyur (near Madurai)",
    latitude: 9.7358,
    longitude: 77.7896,
    basePrice: 145,
    transportCost: 27,
  },
  {
    name: "Thiruparankundram Bazaar",
    location: "Thiruparankundram (near Madurai)",
    latitude: 9.9252,
    longitude: 78.121719,
    basePrice: 190,
    transportCost: 18,
  },
  {
    name: "Alanganallur Market",
    location: "Alanganallur (near Madurai)",
    latitude: 10.04611,
    longitude: 77.798,
    basePrice: 115,
    transportCost: 32,
  },
  {
    name: "Sedapatti Local Market",
    location: "Sedapatti (near Madurai)",
    latitude: 9.8219,
    longitude: 77.798,
    basePrice: 155,
    transportCost: 23,
  },
  {
    name: "Coimbatore Central Market",
    location: "Coimbatore",
    latitude: 11.004550,
    longitude: 76.961632,
    basePrice: 200,
    transportCost: 40,
  },
  {
    name: "Salem Town Market",
    location: "Salem",
    latitude: 11.664323,
    longitude: 78.146881,
    basePrice: 110,
    transportCost: 38,
  },
  {
    name: "Tiruchirappalli Wholesale",
    location: "Tiruchirappalli",
    latitude: 10.786999,
    longitude: 78.696881,
    basePrice: 175,
    transportCost: 25,
  },
  {
    name: "Tirunelveli Junction Market",
    location: "Tirunelveli",
    latitude: 8.741222,
    longitude: 77.694626,
    basePrice: 130,
    transportCost: 33,
  },
  {
    name: "Erode Gani Market",
    location: "Erode",
    latitude: 11.342424,
    longitude: 77.703644,
    basePrice: 165,
    transportCost: 29,
  },
  {
    name: "Vellore Gandhi Market",
    location: "Vellore",
    latitude: 12.934174,
    longitude: 79.137825,
    basePrice: 125,
    transportCost: 31,
  },
  {
    name: "Thanjavur Big Market",
    location: "Thanjavur",
    latitude: 10.786999,
    longitude: 79.137825,
    basePrice: 185,
    transportCost: 21,
  },
  {
    name: "Nagercoil Town Market",
    location: "Nagercoil",
    latitude: 8.174450,
    longitude: 77.432159,
    basePrice: 140,
    transportCost: 36,
  },
  {
    name: "Hosur Vegetable Market",
    location: "Hosur",
    latitude: 12.735126,
    longitude: 77.829338,
    basePrice: 195,
    transportCost: 19,
  },
  {
    name: "Kanchipuram Daily Market",
    location: "Kanchipuram",
    latitude: 12.834174,
    longitude: 79.137825,
    basePrice: 118,
    transportCost: 34,
  },
];

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    console.log('Connected to MongoDB Atlas');

    // Delete all existing documents in the markets collection
    await Market.deleteMany({});
    console.log('Old markets deleted successfully');

    // Insert multiple documents at once
    await Market.insertMany(markets);
    console.log('New markets inserted successfully');

    process.exit(0);
  })
  .catch(err => {
    console.error('Error seeding markets:', err);
    process.exit(1);
  });
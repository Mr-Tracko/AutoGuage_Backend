const mongoose = require("mongoose");
require("dotenv").config();

const Seller = require("../models/SellerInfo");
const Vehicle = require("../models/Vehicle");

const sellersData = require("./Sellers");
const vehiclesData = require("./Vehicles");

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    await Seller.deleteMany();
    await Vehicle.deleteMany();

    const sellers = await Seller.insertMany(sellersData);
    console.log("Sellers inserted");

    const vehiclesWithSeller = vehiclesData.map((v, index) => ({
      ...v,
      seller: sellers[index % sellers.length]._id
    }));

    await Vehicle.insertMany(vehiclesWithSeller);
    console.log("Vehicles inserted");

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDatabase();

const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  contactNo: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  fullAddress: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Seller", sellerSchema);

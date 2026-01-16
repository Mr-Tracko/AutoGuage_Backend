const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    // Reference to Seller
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
      required: true
    }, //We use ObjectId references to model relationships in MongoDB, allowing efficient data normalization and population of related documents

    // Basic Vehicle Info
    brand: {
      type: String,
      required: true,
      trim: true //MongoDB will automatically remove extra spaces from the beginning and end of the string before saving it.
    },
    model: {
      type: String,
      required: true,
      trim: true
    },
    year: {
      type: Number,
      required: true
    },
    mileage: {
      type: Number,
      required: true
    },
    condition: {
      type: String,
      enum: ["excellent", "good", "fair", "poor"],
      required: true
    },

    // Technical Details
    fuelType: {
      type: String,
      enum: ["petrol", "diesel", "hybrid", "electric", "lpg"],
      required: true
    },
    transmission: {
      type: String,
      enum: ["manual", "automatic"],
      required: true
    },
    engineCC: {
      type: Number
    },

    // Legal & Ownership
    registrationNumber: {
      type: String,
      unique: true,
      sparse: true
    },
    ownershipType: {
      type: String,
      enum: ["first", "second", "third", "more"]
    },
    insuranceValidity: {
      type: Date
    },

    // Pricing
    askingPrice: {
      type: Number,
      required: true
    },
    aiSuggestedPrice: {
      type: Number
    },

    // History & Description
    serviceHistory: {
      type: String
    },
    description: {
      type: String
    },

    // Features
    features: {
      type: [String],
      default: []
    },

    // Images (store URLs, not files)
    images: {
      type: [String],
      default: []
    },

    // Status
    status: {
      type: String,
      enum: ["draft", "listed", "sold"],
      default: "listed"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vehicle", vehicleSchema);

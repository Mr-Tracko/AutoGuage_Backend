const express = require("express");
const router = express.Router();
const {createVehicle,
  getAllVehicles,
  getVehiclesBySeller,
  getVehicleById} = require("../controllers/VehicleController");

router.post("/" , createVehicle);
router.get("/" , getAllVehicles);
router.get("/seller/:sellerID" , getVehiclesBySeller);
router.get("/:id" , getVehicleById);

module.exports = router;
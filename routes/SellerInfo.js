const express = require("express");
const router = express.Router();
const {createSeller , getAllUsers} = require("../controllers/SellerController.js");

router.post("/" , createSeller);
router.get("/" , getAllUsers);

module.exports = router;

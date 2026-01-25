const express = require("express");
const axios = require("axios");

const router = express.Router();
router.post("/", async (req, res) => {
    console.log("payload sending: " , req.body)
    try {
        const response = await axios.post(
            "http://127.0.0.1:8000/predict",
            req.body
        );
        res.json(response.data);
    }
    catch (error) {
        console.error("ML Error:", error.message);
        res.status(500).json({ error: "Prediction failed" });
    }
})

module.exports = router;
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const sellerroutes = require("./routes/SellerInfo.js");
const vehicleRoutes = require("./routes/Vehicle");
const predictRoutes = require("./routes/Predict.js");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/sellers", sellerroutes);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/predict", predictRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("Mongo Error:", err));


const PORT = process.env.PORT || 5000;
app.get("/" , (req,res) => {
    res.send(`Backend running on ${PORT}`);
})

app.listen(PORT , ()=>{
    console.log(`Server running on Port ${PORT}`);
})
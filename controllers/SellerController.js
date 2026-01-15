const Seller = require("../models/SellerInfo");

const createSeller = async(req,res) => {
    try{
        const seller = new Seller(req.body());
        await seller.save();
        res.status(201).json(seller);
    }
    catch{
        res.status(401).json({ error: error.message });
    }
}

const getAllUsers = async(req ,res) => {
    try{
        const sellers = await Seller.find();
        res.json(sellers);
    }catch{
        res.status(401).json({error : error.message});
    }
}


module.exports = {
  createSeller,
  getAllUsers,
};

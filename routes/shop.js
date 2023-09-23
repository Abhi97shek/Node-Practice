const express = require('express');
const router = express.Router();
const path = require('path');

const adminData = require("../routes/admin");
router.get('/',(req,res,next)=>{

    res.status(200).render('shop',{products:adminData.products,pageTitle:"All Products Page"});
    
});


module.exports = router;
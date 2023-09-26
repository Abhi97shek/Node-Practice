const express = require('express');
const router = express.Router();
const shopController = require("../controllers/shop");


// Get the Index page of the Shop Side
router.get('/',shopController.getIndex);

// Get the List Of All Products Page of the Shop Side
router.get("/products",shopController.getAllProductsList)


// Get the Get the Detail About the Product By Getting Id Through req.parameter

router.get("/products/:productId",shopController.getProductById)
// Get the CheckOut Page 
router.get("/checkout",shopController.getCheckOutPage);

// Get the Cart Page 
router.get("/cart",shopController.getCartDetails);

// Post Cart Route

router.post("/cart",shopController.postCart);

// Get all the Orders

router.get("/orders",shopController.getAllOrders);
module.exports = router;
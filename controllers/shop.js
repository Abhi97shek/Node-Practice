const Product = require("../models/product");

const getAllProductsList = (req,res,next)=>{

    Product.findAll().then((result)=>{
        res.status(200).render('shop/product-list',{products:result,pageTitle:"All Products Page"});
    }).catch((err)=>{
        console.log(err);
    });


};

const getCartDetails = (req,res,next)=>{
    res.status(200).render('shop/cart',{pageTitle:"Your Cart Details"})
};

const getCheckOutPage = (req,res,next)=>{
    res.status(200).render('shop/checkout',{pageTitle:"Checkout"})
};

const getIndex = (req,res,next)=>{
  

    Product.findAll().then((result)=>{
            res.status(200).render("shop/index",{pageTitle:"Home Page",products:result});
        }).catch((err)=>{
            console.log(err);
        });
    
};


const getAllOrders = (req,res,next)=>{
    res.status(200).render("shop/orders",{pageTitle:"All Orders"});
};


const getProductById = (req,res,next)=>{
    const productId = req.params.productId;
    Product.findByPk(productId).then((result)=>{
        res.status(200).render('shop/product-details',{pageTitle:"Product Details",product:result});
    }).catch((err)=>{
        console.log(err);
    })


};


const postCart = (req,res,next)=>{

    const productId = req.body.productId;

    console.log(productId);

    res.redirect("/cart");

};


module.exports ={
    getAllProductsList,
    getCartDetails,
    getCheckOutPage,
    getIndex,
    getAllOrders,
    getProductById,
    postCart
}
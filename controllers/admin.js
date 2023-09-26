const Product = require("../models/product");


const getAddProductPage = (req,res,next)=>{
    res.status(200).render("admin/addProduct",{
        pageTitle:"Add Products Page"
    })
};

const addProductItem =  (req,res,next)=>{

    const {title,imageUrl,description,price} = req.body;
    Product.create({
        title:title,
        imageUrl:imageUrl,
        description:description,
        price:price
    }).then((result)=>{
        console.log("Product Successfully Inserted");
    }).catch((err)=>{
        console.log(err);
    });
    
};

const getAdminProductList = (req,res,next)=>{
    Product.findAll().then((result)=>{
        res.status(200).render("admin/productList",{pageTitle:"Admin Product List Page",products:result});
    }).catch((err)=>{
        console.log(err);
    })
    
};


module.exports = {
    getAddProductPage,
    addProductItem,
    getAdminProductList
}
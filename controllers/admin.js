const Product = require("../models/product");


const getAddProductPage = (req,res,next)=>{
    res.status(200).render("admin/addProduct",{
        pageTitle:"Add Products Page"
    })
};

const addProductItem =  (req,res,next)=>{

    const {title,imageUrl,description,price} = req.body;
    req.user.createProduct({
        title:title,
        imageUrl:imageUrl,
        description:description,
        price:price
    }).then((result)=>{
       res.redirect("/admin/product-list");
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

const getEditProduct = (req,res,next)=>{
    const productId = req.params.productId;
    req.user.getProducts({where:{id:productId}}).then((prod)=>{
        res.status(200).render("admin/editProduct",{pageTitle:"Edit Product",product:prod[0]});
    }).catch((err)=>{
        console.log(err);
    });

};

const postEditProduct = (req,res,next)=>{
    const productId = req.params.productId;
    const {title,price,imageUrl,description} = req.body;

    Product.findByPk(productId).then((product)=>{
            product.title = title;
            product.price = price;
            product.description = description;
            product.imageUrl = imageUrl;
            product.save();
            res.status(200).redirect("/admin/product-list");
}).catch((err)=>{
    console.log(err);
});
};


const getDeleteProduct = (req,res,next)=>{
    const productId = req.params.productId;
    Product.findByPk(productId).then((product)=>{
        return product.destroy();
    }).then((result)=>{
        console.log("Product Deleted Successfully");
        res.redirect("/admin/product-list");
    }).catch((err)=>{
        console.log(err);
    })
};

module.exports = {
    getAddProductPage,
    addProductItem,
    getAdminProductList,
    getEditProduct,
    postEditProduct,
    getDeleteProduct
}
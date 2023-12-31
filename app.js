const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {engine} = require('express-handlebars');

// All Routes File Path
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// Import the Models

const Product = require("./models/product");
const User = require("./models/user");
const Cart =require("./models/cart");
const CartItem = require("./models/cart-item");

// Database Import 
const sequelize = require("./util/database");
const app = express();

// app.engine('hbs',engine({extname:'hbs',defaultLayout:'main'}));
app.set('view engine','ejs');
app.set('views','views');

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));


app.use((req,res,next)=>{

    User.findByPk(1).then((user)=>{
        req.user = user;
        next();
    }).catch((err)=>{
        console.log(err);
    })

});

app.use("/admin",adminRoutes);
app.use(shopRoutes);



app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle:"404 Page",pageDescription:"Page Not Found"})
});


Product.belongsTo(User,{constraints:true,onDelete:'CASCADE'});
// User.hasMany(Product);
// User.hasOne(Cart);
Cart.belongsTo(User);

Product.belongsToMany(Cart,{through:CartItem});



sequelize.
    // sync().
sync({force:true}).
then((result)=>
{
    User.findByPk(1).then((user)=>{
        return user;
    }).then((user)=>{
        if(!user)
            {
                return User.create({name:"Abhishek",email:"test@gmail.com"});
            }
            return user
    }).then((result)=>{

        console.log("User Created Successfully")
         // console.log(result);
    app.listen(3000,(err)=>{
        if(err)
            {
                console.log(err);
            }
        console.log(`Listening on the PORT 3000`);
    });
    })
   
}).catch((err)=>{
    console.log(err);
});



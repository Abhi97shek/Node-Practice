const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {engine} = require('express-handlebars');


// All Routes File Path
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

// app.engine('hbs',engine({extname:'hbs',defaultLayout:'main'}));
app.set('view engine','ejs');
app.set('views','views');


// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));

app.use(adminRoutes.router);
app.use(shopRoutes);

app.use((req,res,next)=>{

    res.status(404).render('404',{pageTitle:"404 Page",pageDescription:"Page Not Found"})
});

app.listen(3000,(err)=>{
    if(err)
        {
            console.log(err);
        }
    console.log(`Listening on the PORT 3000`);
});
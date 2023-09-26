const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-practice','root','root',{
    dialect:"mysql",
    host:"localhost"
});


sequelize.authenticate().then(()=>{
    console.log('Connection has been established Successfully');
}).catch((err)=>{
    console.log(`Unable to connect to the database - ${err}`);
})

module.exports = sequelize;
// var express = require('express')
// var mdb = require('mongoose')
// var app = express()
// mdb.connect("mongodb+srv://kishoreanandr:Kishore%4004@mernbackendproject1.w3gnmkj.mongodb.net/mernbackendconnect", { useNewUrlParser: true, useUnifiedTopology: true })
// var login_module=require('./models/login.js')
// var db = mdb.connection;
// db.once('open', () => {
//     console.log("Connection to MangoDB is successful");
// })
// app.get("/", (req, res) => {
//     res.send("mongodb is connected sucessfully");
// })
// app.get("/user", (req, res) => {
//     res.send("HELLO USER")
// })

// const newLogin = new login_module(
//     {
//         user_name: "kishore21",
//         name: "KISHORE ANAND R",
//         email: "kishoreanand.r@gmail.com",
//         password: "Kishore@04"
//     }
// )
// newLogin.save().then(()=>{console.log("Data base inserted successfully!!")})
// .catch(()=>{console.log("Not inserted!!")})
// app.listen(3001)
// console.log("Backend Connected");


// var express=require('express')
// var app=express()
// app.get('/',(req,res)=>
// {
//     console.lop\
// })
var login_module=require('./models/login.js');
mdb=require('mongoose');
mdb.connect("mongodb+srv://kishoreanandr:Kishore%4004@mernbackendproject1.w3gnmkj.mongodb.net/mernbackendconnect");
var db=mdb.connection;
db.on(
    'error',(err)=>
    {
        console.log("Mongo Error:",err);
    }
)
db.once(
    'open',()=>
    {
        console.log("Mongodb is connected");
    }
)
const newLogin= new login_module(
    {
        id:110,
        email:"kishoreanandr.21ece@kongu.edu",
        password:"Raja@1506"
    }
)
newLogin.save().then(()=>{console.log("Data inserted successfully")})
.catch(()=>{console.log("Not inserted...")})

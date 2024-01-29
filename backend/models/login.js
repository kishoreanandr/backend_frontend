// var mdb=require('mongoose')

// const loginSchema=new mdb.Schema(
//     {
//         user_name:String,
//         name:String,
//         email:String,
//         password:String
//     }
// )
// const Login_module=mdb.model('login',loginSchema);
// module.exports=Login_module

// /*
//  {
//         name:String,
//         email:String,
//         password:String
//     }
// */
var mdb=require('mongoose');
const loginSchema=new mdb.Schema(
    {
        id:Number,
        email:String,
        password:String
    }
)
const Login_module=mdb.model('login',loginSchema)
module.exports=Login_module
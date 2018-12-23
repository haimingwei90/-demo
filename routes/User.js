const mongoose = require("mongoose");
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/test",{useMongoClient:true});
const User = mongoose.model("User",(
    {name:String,
    password:String
        }
));
// async function run(){
//     await User.remove();
//     await User.create(
//        {name:"hai",password:"hai"}
//     )
//     console.log(await User.find());    
// }

 module.exports = User;
const mongoose = require("mongoose");
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/test",{useMongoClient:true});
const User = mongoose.model("User",(
    {
    name:String,
    password:String
    }
));
 module.exports = User;
var express = require('express');
var router = express.Router();
var User = require("./User.js");
var userlist = [];
/* GET home page. */
router.get('/', function(req, res, next) {  
    res.render('index');
});
router.post("/registe",async function(req,res,next){
  
  const{name,password} = req.body;
  // await User.remove();
  var user = new User({name:name,password:password});
  await user.save(function (err){
    if(err){
      console.log(err);
    }else{
      console.log("save ok");
    }
  });
  res.redirect('/');
})
router.post("/login", async function(req,res){
  const name = req.body.name;
  const password = req.body.password;
  req.session.user = {name,password}; 
  var currentuser = req.session.user.name; 
  if(req.session.user){
    var userl = await User.findOne({ name: name });
  }
  
  if (name == userl.name &&password == userl.password) {     
     res.render('chat',{currentuser});
  }
  res.redirect('/');
});
router.get("/login",function(req,res){
  res.redirect("/");
});
router.get('/registe',function(req,res,next){
  res.redirect('/');
})

module.exports = router;

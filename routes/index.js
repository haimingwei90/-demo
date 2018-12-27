var express = require('express');
var router = express.Router();
var User = require("./User.js");
/* GET home page. */
router.get('/', function(req, res, next) {  
    res.render('index');
});
router.post("/registe",async function(req,res,next){
  
  const{name,password} = req.body;
  // await User.remove();
  var user = new User({name:name,password:password});
  console.log(user);
  
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
  const {name ,password} = req.body
  req.session.user = {name,password}; 
  if(req.session.user.name){
    var userl = await User.findOne({ name: name });
    if (name == userl.name && password == userl.password) {
      res.render('chat', { user: req.session.user });
    }
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

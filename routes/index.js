var express = require('express');
var router = express.Router();
var User = require("./User.js");
/* GET home page. */
router.get('/', function(req, res, next) {  
  console.log(req.session.user);
  
  if(req.session.user){
    return res.render('chat',{user:req.session.user});
  }
    res.render('index');
});
router.post("/registe",async function(req,res,next){
  
  const{name,password} = req.body;
  var user = new User({name:name,password:password});
  await user.save(function (err){
    if(err){
      console.log(err);
    }else{
      console.log("save ok");
      
    }
  });
  console.log(await User.find());
  
  res.redirect('/');
})
router.post("/login",function(req,res){
  const {name, password } = req.body;
  req.session.user = {name,password};
  if (user[name]&&name == user[name].name &&
     password == user[name].password) {
     console.log(req.session.user+"session的用户");
     
     res.render('chat', { use:req.session.user })
  }
  res.redirect('/');
})
module.exports = router;

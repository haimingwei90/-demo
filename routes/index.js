var express = require('express');
var router = express.Router();
/* GET home page. */
var user={};
router.get('/', function(req, res, next) {  
  console.log(req.session.user);
  
  if(req.session.user){
    return res.render('chat',{user:req.session.user});
  }
    res.render('index');
});
router.post("/registe",function(req,res,next){
  const{name,password} = req.body;
  user[name] = {name,password};
  console.log(user[name]);
  
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

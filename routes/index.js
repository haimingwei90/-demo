var express = require('express');
var router = express.Router();
/* GET home page. */
var user={};
router.get('/', function(req, res, next) {  
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
  console.log(name);
  
  if (user[name]&&name == user[name].name &&
     password == user[name].password) {
     res.render('chat', { user })
  }
  res.redirect('/');
})
module.exports = router;

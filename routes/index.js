var express = require('express');
var router = express.Router();
/* GET home page. */
var user={};
router.get('/', function(req, res, next) {  
  // const{name,password} = req.body;
  // if (usr = avl(name,password)){
  //   res.render('chat',{user})
  // }
  res.render('index');
});
// function avl(name,password){
//     if(name == user.name && password == user.password){
//       return user[name];
//     }
// };
// router.post("/registe",function(req,res,next){
//   const{name,password} = req.body;
//   user[name] = {name,password};
//   res.redirect('/');
// })

module.exports = router;

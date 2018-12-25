var express = require('express');
var router = express.Router();
var User = require("./User.js");
var userlist = [];
/* GET home page. */
router.get('/', function(req, res, next) {  
  // req.session.user = req.session.user || null;
  // console.log(req.session.user);  
  // if(req.session.user){
  //   return res.render('chat',{user:req.session.user});
  // }
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
  console.log("注册用户"+await User.find());
  res.redirect('/');
})
router.post("/login", async function(req,res){
  const {name, password } = req.body;
  req.session.user = {name,password};
  // console.log(await User.findOne({name:"a"}));
  const user = await User.findOne({name:name}); 
  console.log("数据库用户"+user.name);
  
  // const query = User.find();
  // const user =await  query.$where('this.name === name');
  // console.log(user);
  if (name == user.name &&
     password == user.password) {
     console.log(req.session.user+"session的用户");
     
     res.render('chat', { use:req.session.user, })
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

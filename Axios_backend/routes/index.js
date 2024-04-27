var express = require('express');
var router = express.Router();
const mongoose= require("mongoose");
const cors= require("cors");
router.use(cors());

mongoose.connect('mongodb://localhost:27017/axiosDataBase');
const schema= new mongoose.Schema({
  name:String,
  username:String,
  email:String,
  passowrd:String
})

const model= mongoose.model("axiosData",schema);

//to register
router.post("/",(req,res)=>{
  model.create(req.body).then((gotData)=>{
    res.json(gotData);
  }).catch((err)=>{
    res.json(err);
  })
})

//to display
router.get("/display",(req,res)=>{
  model.find({}).then((gotData)=>{
    res.json(gotData)
  }).catch((err)=>{
    res.json(err);
  })
})

//to delete
router.delete("/delete/:id",(req,res)=>{
  const id= req.params.id;
  model.findByIdAndDelete({_id:id}).then((deleted)=>{
    res.json(deleted)
  }).catch((err)=>{
    res.json(err);
  })
})


router.put("/update/:id",(req,res)=>{
  const id= req.params.id;
  const name= req.body.name;
  const username= req.body.username;
  const email= req.body.email;
  model.findByIdAndUpdate({_id:id},{name:name,username:username, email:email}).then((gotData)=>{
    res.json(gotData)
  }).catch((err)=>{
    res.json(err);
  })
})

router.get("/display/:id",(req,res)=>{
  const id= req.params.id;
  model.findById({_id:id}).then((response)=>{
    res.json(response)
  }).catch((err)=>{
    res.json(err);
  })
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
 mongoose.connect("mongodb://localhost:27017/wikdb",{useNewUrlParser:true});

 const articalSchema={
     title:String,
     content:String
 }
 const Article =mongoose.model("Article",articalSchema);
 

app.route("/articls")
 .get(function(req,res){
  Article.find({},function(err,foundArticl){
      if(!err){
          res.send(foundArticl);
      }else{
        console.log(err);
      }
  })
})
.post(function(req,res){
  const newArticle= new Article({
    title:req.body.title,
    content:req.body.content
  })
  newArticle.save(function(err){
    if(!err){
      res.send("successfully added")
    }else{
      res.send(err);
    }
  })
 })
.delete(function(req,res){
  Article.deleteMany(function(err){
    if(!err){
      res.send("successfuly deleted")
    }else{
      res.send(err);
    }
  })
});
/////////////////////////////////////////////////////////////////// specific article//////////////////////
app.route("/articls/:articleName")
.get(function(req,res){

  Article.findOne({title:req.params.articleName},function(err,result){
    if(result){
      res.send(result);
    }else{
      res.send("there is no match such this name!")
    }
  })
})
.put(function(req,res){
  Article.updateOne(
    {title:req.params.articleName},
    {content:req.body.content},
    function(err,result){
      if(!err){
        res.send("successfuly update");
      }else{
        res.send(err);
      }
    }
  )
})
.patch(function(req,res){
  Article.updateOne({title:req.params.articleName},
    {$set:req.body},
    function(err,result){
      if(!err){
        res.send("successfuly update");
      }else{
        res.send(err);
      }
    }
    )
})
.delete(function(req,res){
  Article.deleteOne({title:req.params.articleName},
    function(err){
      if(!err){
        res.send("successfuly deleted")
      }else{
        res.send(err);
      }
    }
    )
});



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
const express=require("express");
const bodyParser =require("body-parser");
const date=require(__dirname+"/date.js");
const app=express();
var items=["coffe","icecream","tea"];
let workItems=[];
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));
app.get("/",function(req,res){
    let day=date.getDate();
    res.render("list",{kindday:day,newListItem:items})
    
})
app.post("/",function(req,res){
     item=req.body.item;
    if(req.body.button==="work list"){
        workItems.push(item)
        res.redirect("/work");
    }else{
       
        items.push(item);
        res.redirect("/");
    }
     
    
})
app.get("/work",function(req,res){
    res.render("list",{kindday:"work list",newListItem:workItems});
})

app.listen(3000,function(){
    console.log("server started on port 3000");
})
const express = require ("express")

const app = express()


app.post("user/signup",function(req,res){
    res.json({
        message: "signup endpoint"
    })
})


app.post("user/signin",function(req,res){
    res.json({
        message : "siginin endpoint"
    })
})

app.get("user/purchases",function(req,res){
    res.json ({
        message : "view purchased courses endpoint"
    })
})

app.post("course/purchase",function(req,res){
    res.json({
        message : "purchase course end point (post)"
    })
    
})


app.get("courses", function(req,res){
    res.json({
        message : "here are the listed courses"
    })
})

app.listen(3000)
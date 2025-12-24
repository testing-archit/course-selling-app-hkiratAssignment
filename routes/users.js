function UserRelatedRoutes(app){

    app.post("/user/signup",function(req,res){
        res.json({
            message: "signup endpoint"
        })
    })


    app.post("/user/signin",function(req,res){
        res.json({
            message : "siginin endpoint"
        })
    })

    app.get("/user/purchases",function(req,res){
        res.json ({
            message : "view purchased courses endpoint"
        })
    })
}



module.exports = {
    UserRelatedRoutes : UserRelatedRoutes
}
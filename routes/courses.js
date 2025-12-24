function CourseRelatedRoutes(app){




    app.post("/courses/purchase",function(req,res){
        res.json({
            message : "purchase course end point (post)"
        })
        
    })


    app.get("/courses/preview", function(req,res){
        res.json({
            message : "here are the listed courses"
        })
    })

}


module.exports = {
    CourseRelatedRoutes: CourseRelatedRoutes
}
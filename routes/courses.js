const { Router } = require("express")

const CourseRouter = Router();


CourseRouter.post("/purchase", function (req, res) {
    res.json({
        message: "purchase course end point (post)"
    })

})


CourseRouter.get("/preview", function (req, res) {
    res.json({
        message: "here are the listed courses"
    })
})




module.exports = CourseRouter

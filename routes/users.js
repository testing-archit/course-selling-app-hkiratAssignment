const { Router } = require("express")

const UserRouter = Router();

UserRouter.post("/signup", function (req, res) {
    res.json({
        message: "signup endpoint"
    })
})


UserRouter.post("/signin", function (req, res) {
    res.json({
        message: "siginin endpoint"
    })
})

UserRouter.get("/purchases", function (req, res) {
    res.json({
        message: "view purchased courses endpoint"
    })
})


module.exports = UserRouter;
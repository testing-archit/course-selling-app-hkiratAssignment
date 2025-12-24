const express = require("express")
const CourseRelatedRoutes = require("./routes/courses")
const UserRelatedRoutes = require("./routes/users")
const app = express()

app.use("/user", UserRelatedRoutes);

app.use("/course", CourseRelatedRoutes)




app.listen(3000)
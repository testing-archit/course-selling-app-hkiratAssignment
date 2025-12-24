const express = require ("express")
const {CourseRelatedRoutes} = require("./routes/courses")
const {UserRelatedRoutes} = require("./routes/users")
const app = express()
 

CourseRelatedRoutes(app);
UserRelatedRoutes(app);




app.listen(3000)
const {Router} = require("express")

//controller import
const {userSignUp} = require("../controllers/userSignUp.controller.js")
const {userLogin} = require("../controllers/userLogin.controller.js")
const {purchaseCourse} = require("../controllers/purchaseCourse.controller.js")
const {allCourses} = require("../controllers/allCourses.controller.js")

const userRouter = Router()


userRouter("/signup" , userSignUp)

userRouter("/login" , userLogin)

userRouter("/courses" , purchaseCourse)

userRouter("/allCourses" , allCourses)



module.exports = userRouter
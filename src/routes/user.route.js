const {Router} = require("express")
const {userSignUp} = require("../controllers/userSignUp.controller.js")
const userRouter = Router()


userRouter("/signup" , userSignUp)

userRouter("/login" , userLogin)

userRouter("/courses" , userPurchasecourse)

userRouter("/AllCourses" , AllCourses)



module.exports = userRouter
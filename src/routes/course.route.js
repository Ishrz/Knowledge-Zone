const {Router} = require("express")

const {purchaseCourse} = require("../controllers/purchaseCourse.controller.js") 
// const { allCourses } = require("../controllers/allCourses.controller.js")

const courseRouter  = Router()



courseRouter("/allCourses" , allCourses)

courseRouter("/purchaseCourse" , purchaseCourse)
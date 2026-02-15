const express = require("express")

require("dotenv").config()

const userRouter = require("./routes/user.route.js")

const app = express()

app.use(express.json())


app.use("/api/v1/user" , userRouter)
app.use("/api/v1/course" , courseRouter)



module.exports = app
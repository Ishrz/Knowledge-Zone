const app = require("./src/index.js")
const dbConnection = require("./src/config/dbConnection.js")



const PORT = process.env.PORT || 4000;


// dbConnection()


app.listen(PORT ,()=>{
    console.log(`Server is Started at ${PORT}`)
})
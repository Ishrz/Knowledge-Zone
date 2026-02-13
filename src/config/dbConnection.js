const mongoose = require("mongoose")




const dbConnection= async ()=>{

    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database connected........`)
    }catch(err){
        console.log(`Database connection Faild:::: Eror: ${err}`)
    }
    
}

module.exports = dbConnection
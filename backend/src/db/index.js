const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const DB_NAME = require("../constants");

const DbConnection = async ()=>{
    try {
      const connectionInstance = await mongoose.connect(`${process.env.CONNECTION_URI}/${DB_NAME}`)  
      console.log(`Database connected on HOST ${connectionInstance.connection.name}`)
      
    } catch (error) {
     console.log(`Database connection error!!!!!`, error)
     process.exit(1)
        
    }
}

module.exports = DbConnection;
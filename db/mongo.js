const mongoose = require('mongoose');

const connect = async()=>{
 try{
    const connectMongo = await mongoose.connect("mongodb://localhost:27017/Blogs")
    console.log("Mongodb successfully connnected");
 }catch(error){
    console.log("Error connecting to the database", error);
 }
}

module.exports = connect;
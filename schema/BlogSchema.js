const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
 title:{
    type:String,
    required: true,
 },
 description:{
    type:String,
    required:true
 },
 content:{
    type:String,
    required: true
 },
 publishedAt:{
    type:Date,
    default: Date.now()
 },
 readingTime:{
    type:Number,
 }
})

const BlogPost = mongoose.model('BlogPost', BlogSchema);

module.exports = BlogPost;
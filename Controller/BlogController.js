const BlogPost = require('../schema/BlogSchema')

const createBlog = async(req, res)=>{
    const {title, description, content, readingTime } = req.body;

    try{
        const newPost = new BlogPost({
            title,
            description,
            content,
            readingTime
        });

        await newPost.save();
        res.status(201).json(newPost);
    }catch(error){
        console.log("Error saving data to the database", error);
        res.status(400).json({msg:"Error saving data to the database"});
    }
}

const getBlog = async(req,res)=>{
    try{
        const post = await BlogPost.find({});
        res.status(200).json(post);
    }catch(error){
        console.log(error);
        res.status(400).json({msg:"Error fetching blog from blogPosts"})
    }
}

module.exports ={createBlog, getBlog}
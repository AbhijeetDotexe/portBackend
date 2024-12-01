const express = require('express');
const connect = require('./db/mongo');
const PORT = 3000;
const app = express();
const BlogRouter = require('./routes/BlogRoute');
const cors = require('cors');
connect();
app.use(cors("*"));
app.use(express.json());

app.use('/blog',BlogRouter);
app.get('/',(req,res)=>{
    res.send("This is just for testing if everything is working fine or not!")
})

app.listen(PORT,()=>{
    console.log("App is running on port ", PORT);
})
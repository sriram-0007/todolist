const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const TodoModel=require("./models/Todo")
const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://sriramyadav885:root@cluster0.rhlomry.mongodb.net/todolist?retryWrites=true&w=majority&appName=Cluster0')
const db=mongoose.connection;

db.on("connected",()=>{
    console.log("MongoDB connected");
});
db.on("error",(err)=>{
    console.log("Error Occured",err);
});
db.on("disconnected",()=>{
    console.log("MongoDB Disconnected");
});

app.get('/get',(req,res)=>{
    TodoModel.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})
app.post('/add',(req,res)=>{
    const task=req.body.task;
    TodoModel.create({
        task:task
    }).then(result=> res.json(result))
    .catch(err=>res.json(err))
})

app.listen(3001,()=>{
    console.log("server is running");
})
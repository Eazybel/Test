const express=require("express")
const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://eazybel27:Gpq9qsMV7k12cbDG@syntax.ggwqid2.mongodb.net/Project-0?retryWrites=true&w=majority&appName=syntax")
,then(()=>{
    console.log("DB Saved")
})


app.get("/",(req,res)=>{
    res.send("Sucess")
})
app.listen(5000,()=>{
console.log("Listening to port on 5000")
})
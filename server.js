const express=require("express")
const mongoose=require("mongoose")
const app=express()
const path=require("path")
app.use(express.static(path.join(__dirname,("public"))))
// mongoose.connect("mongodb+srv://eazybel27:YU5blJj4BhFdnEr4@syntax.ggwqid2.mongodb.net/?retryWrites=true&w=majority&appName=syntax")
// .then(()=>{
//     console.log("DB Saved")
// })


// const testSchema=new mongoose.Schema({
//     profileImage:String,
//     cv:String,
//     name:String,
//     age:Number
// })
// const testModel=new mongoose.model("testModel",testSchema,"TestFile")

app.get("/",async (req,res)=>{
   
res.sendFile("/index.html")
})

app.get("/",(req,res)=>{
    res.send("Sucess")
})
app.listen(5000,()=>{
console.log("Listening to port on 5000")
})
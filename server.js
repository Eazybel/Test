const express=require("express")
const mongoose=require("mongoose")
const {GridFsStorage}=require("multer-gridfs-storage")
const multer=require("multer")
const Grid=require("gridfs-stream")
const app=express()

mongoose.connect("mongodb+srv://eazybel27:YU5blJj4BhFdnEr4@syntax.ggwqid2.mongodb.net/?retryWrites=true&w=majority&appName=syntax")
.then(()=>{
    console.log("DB Saved")
})

const storage= new GridFsStorage({
    url:"mongodb+srv://eazybel27:YU5blJj4BhFdnEr4@syntax.ggwqid2.mongodb.net/?retryWrites=true&w=majority&appName=syntax",
    file:(req,file)=>{
        const fileName=Date.now()+"-"+file.originalnamw
    return {
                fileName,
                bucketName:"upload"
        }
    }
})
const upload=multer({storage})
const testSchema=new mongoose.Schema({
    profileImage:String,
    cv:String
})
const testModel=new mongoose.model("testModel",testSchema,"TestFile")

app.post("/",upload.fields([
   { name:"profileImage",maxCount:1},
    {name:"cv",maxCount:1}
]),(req,res)=>{
    const newProfile=testModel.insertOne({
        profileImage:profileImage,
        cv:cv
    })
newProfile.save()
.then(()=>{
    console.log("Saved")
})
})

app.get("/",(req,res)=>{
    res.send("Sucess")
})
app.listen(5000,()=>{
console.log("Listening to port on 5000")
})
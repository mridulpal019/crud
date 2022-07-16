const express=require('express');
const path=require('path');//inbulid 
const port= 8000;

const db=require("./models")

const app=express();
app.use(express.urlencoded({extended:true}))
app.use(express.json());

const apiroutes=require("./routes/apiRoutes");
app.use("/api",apiroutes);
db.sequelize.sync().then((()=>{
    app.listen(port,()=>{
        console.log("listenig to the port 8000");
    })
}))
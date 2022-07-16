const express=require("express");
const router=express.Router();
const db=require("../models");
const todo = require("../models/todo");


//get all
router.get("/all",(req,res)=>{
    db.Todo.findAll().then(todo=>res.send(todo));

})

//get single 
router.get("/find/:id",(req,res)=>{
    db.Todo.findAll({
        where:{
            id:req.params.id
        }
    }).then(todo=>res.send(todo)); 
})

//create new data
router.post('/new',(req,res)=>{
    db.Todo.create({
        text:req.body.text
    }).then(submittedTodo=>res.send(submittedTodo))
})
//delete
router.delete('/delete/:id',(req,res)=>{
    db.Todo.destroy({
        where:{
            id:req.params.id
        }
    }).then(()=>res.send("succesfully deleted"))
})

//update
router.put('/edit',(req,res)=>{
    db.Todo.update({
        text:req.body.text
    },{
        where:{
            id:req.body.id
        }
    }).then(()=>res.send("updated succesfully"))
})


module.exports=router;
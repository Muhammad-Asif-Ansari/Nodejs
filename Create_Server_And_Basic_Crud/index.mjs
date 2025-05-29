// console.log("HELLO WORLD");


// for (let i = 0; i < 10; i++) {
//  console.log("HELLO WORLD",i);
    
// }


import express from "express"
// const express = require("express")

const app = express()
const PORT = 5000
app.use(express.json()); 
const users = [
   {
      id: 1,
    name: "Clerk Jhon",
    email: "clerkjhon@example.com",
  },
 {
    id: 2,
    name: "Smith",
    email: "smith@example.com",
  },
  {
     id: 3,
    name: "Jon Ald",
    email: "jonald@example.com",
  }
]



app.get('/',(req,res)=>{
   res.send(users)
})

// app.post('/users',(req,res)=>{
//    res.send(users)
// })

app.post('/user',(req,res)=>{
   users.push({id:users.length+1,...req.body})
   res.send({message:"User Added Successfully"})
})
app.delete('/user/:id',(req,res)=>{
   const index = users.findIndex(user=>user.id === Number(req.params.id))
   users.splice(index,1, {id:Number(req.params.id), ...req.body})
   res.send({message: "User Delete Suceesfully"})
})
app.put('/user/:id',(req,res)=>{
   const index = users.findIndex(user=>user.id === Number(req.params.id))
   users.splice(index,1, {id:Number(req.params.id), ...req.body})
   res.send({message: "User Update Suceesfully"})
})
app.listen(PORT,()=>{
   console.log(`server is running on port:${PORT}`); 
})
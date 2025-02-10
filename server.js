const express = require('express')
const port = 4600
const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.listen(port,()=>{
    console.log(`server is connected http://localhost:${port}`)
})

app.post('/',(req,res)=>{
    const { Username , Email , Password , DOB}=req.body
    if(!Username)
        return res.status(400).json({message:`Username cannot be empty`})
    if(!Email)
        return res.status(400).json({message:`Email cannot be empty`})
    if(Password.length<8 || Password.length>16)
        return res.status(400).json({message:`Password length should be greater than 8 or less than or equal to 16`})
    return res.status(200).json({message:`All the details were given`})
})
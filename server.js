const express = require('express') ;
const app = express() ;

app.get("/" , (req,res)=>{
    res.send("Hello From B+ Server") ;
});

app.listen(2000 , ()=>{
    console.log("Server is Running on port 3000....");
}) ;
//console.log('It\'s work');
//const something = require('somelibrary');

const express = require('express');
const app = express();
require('dotenv').config();

const PORT= process.env.PORT;

app.use((req,res,next)=>{
    //
    //How you can check the request type ?
    //objecy.property
    console.log(req.method);

    //Conditions
    /*
        if (condition) {
            //  block of code to be executed if the condition is true
        }

    */
    console.log(typeof(req.method));
    if(req.method === 'GET'){
        console.log('Hi')
        res.status(400).json({
            'msg':"GET Request is not allowed !"
        })
    }else{
        // POST/PUT/DELETE
       next(); 
    }
    
    next();
});

app.post('/student',(req,res)=>{
    //object.method(actual arg)
    res.json({
        "msg":"Hi "
    });
});

app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`)
});
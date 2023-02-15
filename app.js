const express = require('express');
const app =express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path')

dotenv.config();
require('./db/conn');
app.use(express.json()); 
app.use(cookieParser());

app.use(require('./router/auth'));

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*",function(req,res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
 
const PORT = process.env.PORT || 4200;

// app.get('/edit',(req,res) =>{
//     res.send('Helloedit world from the server')
// });


app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`);
});


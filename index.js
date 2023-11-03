const express = require('express');
const bodyParser=require('body-parser')
const app=express();

const mongoose = require('mongoose')
// const PORT=1111;
const routes = require('./Routes/index.js');
 
require('dotenv').config();
// initialise the libraries
app.use(bodyParser.json());


// handle CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/',routes);

// connect to the mongoDB
mongoose.connect(
    process.env.MONGO_URL, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    }
).then(success => {

    console.log('Connected to MongoDB');
    
    // start the server
    app.listen(process.env.PORT,()=>{
        console.log(`server started! ar port ${process.env.PORT}`)
    })

}).catch(error => {
    console.log('Error in Connection ' + error);
});


 
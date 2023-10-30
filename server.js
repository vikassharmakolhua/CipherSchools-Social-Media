const express=require('express');
require('dotenv').config();
const mongoose=require('mongoose');
const boodyParser=require('body-parser');
const jwt=require('jsonwebtoken');
const cors = require('cors');
const port=process.env.PORT || 3000;


const app=express();

app.use(boodyParser.urlencoded({extended:false}));
app.use(boodyParser.json());
app.use(cors());
const dburl=process.env.dburl;
mongoose.connect(dburl,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
});

const db=mongoose.connection;
db.on('error',console.error.bind(console,'MongoDb connection error:'));
db.once('open',() => {
    console.log('connected to MongoDb');
});

app.use('/api/users',require('./routes/userRoutes'));
app.use('/api/users',require('./routes/authRoutes'));
app.use('/api/posts',require('./routes/postRoutes'));
app.use('/api/comments',require('./routes/commentRoutes'));




// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
  });

app.listen(port,()=>{
    console.log(`server is listining at ${port}`)

});
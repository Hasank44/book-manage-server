const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL,{})
    .then(()=>{
        console.log('Database is Connected');
    }).catch((error)=>{
        console.log('Database error', error);
    });
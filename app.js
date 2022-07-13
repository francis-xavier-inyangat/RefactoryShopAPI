const express = require('express'),
mongoose = require('mongoose'),
config = require('./config/db')
 
const facillitatorRoutes = require("./routes/facillitatorRoutes")
// const serviceRoutes = require('./routes/serviceRoutes');

const app = express();

// connect to DB

mongoose.connect(config.database,{useNewUrlParser: true});
 
const db = mongoose.connection;

db.once('open', function(){
  console.log('Connected to MongoDB');
});

db.on('error', function(err){
  console.error(err);
});

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use('/api',facillitatorRoutes)
// app.use('/api',serviceRoutes)



app.listen(4000,()=>{
    console.log('listeningat port 4000');
})
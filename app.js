const express = require('express'),
mongoose = require('mongoose'),
config = require('./config/db')
 
const staffRoutes = require("./routes/staffRoutes")
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

app.use('/api',staffRoutes)




app.get("*", (req, res) => {
  res.status(404).send("OOPS! WRONG ADDRESS");
});

app.listen(4000,()=>{
    console.log('listeningat port 4000');
})
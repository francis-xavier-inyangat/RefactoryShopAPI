const express = require('express');

const router = express.Router();

const Alumni = require('../models/AlumniModel');

router.get('/alumni/register', (req,res)=>{
res.send("Alumni Registration Form");
});

module.exports = router;
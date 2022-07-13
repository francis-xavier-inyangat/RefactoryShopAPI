const express = require('express');

const router = express.Router();

const Program = require('../models/StaffModel');

router.get('/program/register', (req,res)=>{
res.send("Program Registration Form");
});

module.exports = router;
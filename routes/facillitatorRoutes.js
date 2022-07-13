const express = require('express');

const router = express.Router();

const Facillitator = require('../models/Facillitator');

router.get('/facillitators/register', (req,res)=>{
res.send("Facillitator Registration Form");
});

module.exports = router;
const express = require('express');

const router = express.Router();

const Course = require('../models/CourseModel');

router.get('/course/register', (req,res)=>{
res.send("Course Registration Form");
});

module.exports = router;
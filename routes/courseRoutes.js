const express = require('express');

const router = express.Router();

const Course = require('../models/CourseModel');

router.get('/course/register', (req,res)=>{
res.send("Course Registration Form");
});

// register course
router.post('/course/register', async(req,res)=>{
    try{
     const newCourse = new Course(req.body);
     await newCourse.save();
     res.json({
         message:'New course Registered successfuly',
         newCourse
     });
     console.log(newCourse);
    }
    catch(err){
     res.status(400).json("Failed to register course")
     console.log(err);
    }
 })
 
 
 // get course list
 router.get('/course/getlist', async(req,res)=>{
     try{
      const courseList = await Course.find({
 
      });
 
      res.json({
          message:'Courses List',
          courseList
      });
      console.log(courseList);
     }
     catch(err){
      res.status(400).json("Failed to find Course")
      console.log(err);
     }
  })
 
 
 // return individual course 
 router.get('/course/:id', async(req,res)=>{
     try{
         // mongo db checks for the id in database and compares with the one provided by user
         // then return that id
      const course = await Course.findOne({_id:req.params.id});
 
      res.json({
          message:'Course Details',
          course
      });
      console.log(course);
     }
     catch(err){
      res.status(400).json("Failed to find a course with that ID")
      console.log(err);
     }
  })
 
 //  delete a course
 router.delete('/course/:id', async(req,res)=>{
     try{
         
       await Course.deleteOne({_id:req.params.id});
 
      res.json({
          message:'Course has been deleted',
         
      });
      
     }
     catch(err){
      res.status(400).json("Failed to delete course")
      console.log(err);
     }
  })
 
 
 //  update
 router.patch('/course/:id', async(req,res)=>{
     try{
     const options = {new:true}
      const updateCourse = await Course.findOneAndUpdate({_id:req.params.id},{
         $set:{moduleName:req.body.moduleName,
             description:req.body.description,
            }
      },
      options
      );
 
      res.json({
          message:'Course Updated succefully',
          updateCourse
      });
      console.log(updateCourse);
     }
     catch(err){
      res.status(400).send("Failed to update  courses")
      console.log(err);
     }
  })

module.exports = router;
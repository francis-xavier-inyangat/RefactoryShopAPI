const express = require('express');

const router = express.Router();

const Alumni = require('../models/AlumniModel');

router.get('/alumni/register', (req,res)=>{
res.send("Alumni Registration Form");
});


// register alumnus
router.post('/alumni/register', async(req,res)=>{
    try{
     const newAlumni = new Alumni(req.body);
     await newAlumni.save();
     res.json({
         message:'Alumni Registered successfuly',
         newAlumni
     });
     console.log(newAlumni);
    }
    catch(err){
     res.status(400).json("Failed to register alumni")
     console.log(err);
    }
 })
 
 
 // get alumni list
 router.get('/alumni/getlist', async(req,res)=>{
     try{
      const alumniList = await Alumni.find({
 
      });
 
      res.json({
          message:'Refactory Alumni List',
          alumniList
      });
      console.log(alumniList);
     }
     catch(err){
      res.status(400).json("Failed to find Alumni")
      console.log(err);
     }
  })
 
 
 // return individual alumni 
 router.get('/alumni/:id', async(req,res)=>{
     try{
         // mongo db checks for the id in database and compares with the one provided by user
         // then return that id
      const alumnus = await Alumni.findOne({_id:req.params.id});
 
      res.json({
          message:'Alumnus Details',
          alumnus
      });
      console.log(alumnus);
     }
     catch(err){
      res.status(400).json("Failed to find an alumnus with that ID")
      console.log(err);
     }
  })
 
 //  delete a user
 router.delete('/alumni/:id', async(req,res)=>{
     try{
         
       await Alumni.deleteOne({_id:req.params.id});
 
      res.json({
          message:'Alumnus deleted',
         
      });
      
     }
     catch(err){
      res.status(400).json("Failed to delete an Alumnus")
      console.log(err);
     }
  })
 
 
 //  update
 router.patch('/alumni/:id', async(req,res)=>{
     try{
     const options = {new:true}
      const updateAlumnus = await Alumni.findOneAndUpdate({_id:req.params.id},{
         $set:{firstname:req.body.firstname,
             lastname:req.body.lastname,
             email:req.body.email,
             phone:req.body.phone,
             cohort:req.body.cohort,
             age:req.body.age
 
         }
      },
      options
      );
 
      res.json({
          message:'Alumni Updated ok',
          updateAlumnus
      });
      console.log(updateAlumnus);
     }
     catch(err){
      res.status(400).send("Failed to update  Alumnus")
      console.log(err);
     }
  })
module.exports = router;
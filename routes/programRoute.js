const express = require('express');

const router = express.Router();

const Program = require('../models/ProgramModel');

router.get('/programs/register', (req,res)=>{
res.send("Program Registration Form");
});

// register program
router.post('/programs/register', async(req,res)=>{
    try{
     const newProgram = new Program(req.body);
     await newProgram.save();
     res.json({
         message:'Program added successfuly',
         newProgram
     });
     console.log(newProgram);
    }
    catch(err){
     res.status(400).json("Failed to add program")
     console.log(err);
    }
 })
 
 
 // get program list
 router.get('/programs/getlist', async(req,res)=>{
     try{
      const programsList = await Program.find({
 
      });
 
      res.json({
          message:'List of programs',
          programsList
      });
      console.log(programsList);
     }
     catch(err){
      res.status(400).json("Failed to find programs")
      console.log(err);
     }
  })
 
 
 // return individual program 
 router.get('/programs/:id', async(req,res)=>{
     try{
         // mongo db checks for the id in database and compares with the one provided by user
         // then return that id
      const program = await Program.findOne({_id:req.params.id});
 
      res.json({
          message:'Program Details',
          program
      });
      console.log(program);
     }
     catch(err){
      res.status(400).json("Failed to find a program with that ID")
      console.log(err);
     }
  })
 
 //  delete a user
 router.delete('/programs/:id', async(req,res)=>{
     try{
         
       await Program.deleteOne({_id:req.params.id});
 
      res.json({
          message:'Program deleted',
         
      });
      
     }
     catch(err){
      res.status(400).json("Failed to delete programs")
      console.log(err);
     }
  })
 
 
 //  update
 router.patch('/programs/:id', async(req,res)=>{
     try{
     const options = {new:true}
      const updateProgram = await Program.findOneAndUpdate({_id:req.params.id},{
         $set:{program:req.body.program,
             description:req.body.description,
            
         }
      },
      options
      );
 
      res.json({
          message:'Program Updated ok',
          updateProgram
      });
      console.log(updateProgram);
     }
     catch(err){
      res.status(400).send("Failed to update  program")
      console.log(err);
     }
  })
module.exports = router;
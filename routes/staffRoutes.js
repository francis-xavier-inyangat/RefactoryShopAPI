const express = require('express');

const router = express.Router();

const Staff = require('../models/StaffModel');

router.get('/staff/register', (req,res)=>{
res.send("Staff Registration Form");
});

// register staff
router.post('/staff/register', async(req,res)=>{
   try{
    const newStaff = new Staff(req.body);
    await newStaff.save();
    res.json({
        message:'Staff Registered successfuly',
        newStaff
    });
    console.log(newStaff);
   }
   catch(err){
    res.status(400).json("Failed to register Staff")
    console.log(err);
   }
})


// get staff list
router.get('/staff/getlist', async(req,res)=>{
    try{
     const staffList = await Staff.find({

     });

     res.json({
         message:'Staff List',
         staffList
     });
     console.log(staffList);
    }
    catch(err){
     res.status(400).json("Failed to find Staff")
     console.log(err);
    }
 })


// return individual staff 
router.get('/staff/:id', async(req,res)=>{
    try{
        // mongo db checks for the id in database and compares with the one provided by user
        // then return that id
     const staff = await Staff.findOne({_id:req.params.id});

     res.json({
         message:'Staff Details',
         staff
     });
     console.log(staff);
    }
    catch(err){
     res.status(400).json("Failed to find a Staff with that ID")
     console.log(err);
    }
 })

//  delete a user
router.delete('/staff/:id', async(req,res)=>{
    try{
        
      await Staff.deleteOne({_id:req.params.id});

     res.json({
         message:'Staff deleted',
        
     });
     
    }
    catch(err){
     res.status(400).json("Failed to delete staff")
     console.log(err);
    }
 })


//  update
router.patch('/staff/:id', async(req,res)=>{
    try{
    const options = {new:true}
     const updateStaff = await Staff.findOneAndUpdate({_id:req.params.id},{
        $set:{firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            phone:req.body.phone,
            role:req.body.role,
            department:req.body.department

        }
     },
     options
     );

     res.json({
         message:'Staff Updated ok',
         updateStaff
     });
     console.log(updateStaff);
    }
    catch(err){
     res.status(400).send("Failed to update  Staff")
     console.log(err);
    }
 })
module.exports = router;
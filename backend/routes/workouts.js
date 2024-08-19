const express=require('express');
const{workouts,getWorkouts,createWorkout,updateWorkout,deleteWorkout}=require('../Controllers/Controllers');
const requireAuth = require('../middleware/requireAuth');
const router=express.Router();
router.use(requireAuth)
router.get('/',workouts)
router.get('/:id',getWorkouts)
router.post('/',createWorkout)
router.delete('/:id',deleteWorkout)
router.patch('/:id',updateWorkout)

module.exports=router
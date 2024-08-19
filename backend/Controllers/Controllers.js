 const mongoose=require('mongoose');
 const Workout=require('../models/Schema');
const workouts=async(req,res)=>{
    const allWorkouts=await Workout.find({});
    res.status(200).json(allWorkouts)
}
 const getWorkouts=async(req,res)=>{
    const { id }=req.params

    const findWorkout= await Workout.findById(id);
    if(!findWorkout){
        return res.status(404).json({error:'No workout found'})
    }
    res.json(findWorkout)
 }
 const createWorkout=async(req,res)=>{

        const {title,load,reps}=req.body;
        try{
            const user_id=req.user._id
            const workout=await Workout.create({title,reps,load,user_id});
            res.status(200).json(workout)
        }catch(err){
            console.error(err);
            res.status(400).json({error:'failed'})
        }
    
    
 }
 const deleteWorkout=async(req,res)=>{
    const {id}=req.params;
    try{
        const deleteworkout=await Workout.findOneAndDelete({_id:id});
        if(!deleteworkout){
            return res.status(400).json({error:'No such workout'})
        }else{
            return res.status(200).json(deleteWorkout)
        }
    }
    catch(err){
   console.error(err);
    }
 }
 const updateWorkout=async(req,res)=>{
    const{id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No workout'})
    }
    const update=await Workout.findByIdAndUpdate({_id:id},{...req.body});
    if(!update){
        return res.status(400).json({error:'No such workout'})
    }
        return res.status(200).json(update)
    
 }

 module.exports={
    workouts,
    getWorkouts,
    createWorkout,
    updateWorkout,
    deleteWorkout
 }
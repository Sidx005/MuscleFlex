const express=require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const cors=require('cors');

dotenv.config();

const workoutRoutes=require('./routes/workouts');
const userRouters=require('./routes/Users')


const app=express();
const PORT=process.env.PORT||4000;

app.use(cors())


app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next()
});

app.use('/api/workouts',workoutRoutes);
app.use('/api/users',userRouters);

mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    
app.listen(PORT,()=>{;
    console.log(`listening on Port ${PORT}`);
    console.log('connected to db');
})
  })
  .catch((err)=>{
   console.error(err);
  })



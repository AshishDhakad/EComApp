import express from'express'
const app = express();

import path from 'path'
import { ENV } from './config/env.js';
const __dirname = path.resolve()

const PORT = ENV.PORT || 5000
app.get('/api/health',(req,res)=>{
    res.status(200).json({message:"Sucess"})
});

// make our app to deployment ready

if(ENV.NODE_ENV==='production'){
  app.use(express.static(path.join(__dirname,'../admin/dist')));

  app.get("/{*any}",(req,res)=>{
    res.sendFile(path.join(__dirname,"../admin", "dist","index.html"))
  })
}


app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`);
    
})
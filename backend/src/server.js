import express from'express'
const app = express();


const port =3000;

app.get('/api/health',(req,res)=>{
    res.status(200).json({message:"Sucess"})
});

app.listen(port,()=>{
    console.log("server is running ");
    
})
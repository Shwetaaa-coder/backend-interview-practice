const express= require ("express");
const app= express();
const PORT= 3000;
const registerRoutes=require("./routes/registerRoutes")
app.use(express.json())

app.get("/",(req,res)=>{
res.send("server is running")
});

app.use("/",registerRoutes)

app.listen(PORT,()=>{
console.log(`app running on port ${PORT}`)
})

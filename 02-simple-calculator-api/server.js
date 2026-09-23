const express = require("express");
const calculator = require("./routes/calculatorRoutes");
const app = express();
const PORT= 3000;

app.use("/",calculator)


app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
})

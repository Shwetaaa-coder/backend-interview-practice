const calculator= ((req,res)=>{
const num1 = Number(req.query.num1)
const num2= Number(req.query.num2)
const operation = req.query.operation
if(operation==="add"){
    res.send(num1+num2)
}  else if(operation==="subtract"){
    res.send(num1-num2)
}  else if(operation==="multiply"){
    res.send(num1*num2)
}  else if(operation==="divide"){
    res.send(num1/num2)
}  
else {
    res.send("Invalid operation")
}
})
module.exports=calculator;

const users =[];

const registerNewUser= ((req,res)=>{
// const {name,email,password}=req.body;
const name = req.body.name;
const email=req.body.email;
const password=req.body.password;
const user={
    name:name,
    email:email,
    password:password
}
users.push(user);
res.status(201).json({
    message: "User registered successfully",
    user: user
});
})

module.exports=registerNewUser;
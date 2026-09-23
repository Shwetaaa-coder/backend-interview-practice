const { Router } = require("express");
const registerNewUser = require("../controllers/registerController");

const router=Router();

router.post("/registerNewUser",registerNewUser);
module.exports=router;
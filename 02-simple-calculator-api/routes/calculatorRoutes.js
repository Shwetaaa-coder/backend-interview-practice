const { Router } = require("express");
const calculator = require("../controllers/calculatorController");
const router=Router();


router.get("/calculate", calculator);

module.exports = router;

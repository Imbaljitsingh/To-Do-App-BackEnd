const express = require('express')

const router = express.Router();


//import contoller

const createToDo = require("../controller/createToDo");
const getToDo = require("../controller/getToDo");
const updateToDo = require("../controller/updateToDo")

//defining api routes

router.post("/createtodo", createToDo);
router.get("/getToDo", getToDo);
router.put("/updateToDo/:id", updateToDo);



module.exports = router;
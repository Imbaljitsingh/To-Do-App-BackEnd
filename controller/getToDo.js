//importing the schema model
const todo = require("../models/todoSchema");

//router handler 

async function getToDo(req, res) {
    try {

        //fetch all to do items from db
        const toDos = await todo.find({}); //no parameter so that it gives us all the data
        //send an json response 
        res.status(200).json({
            success: true,
            data: toDos,
            message: "Data Fetched"
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            data: "Internal Server Error",
            message: error.message,
        })
    }
}

module.exports = getToDo;

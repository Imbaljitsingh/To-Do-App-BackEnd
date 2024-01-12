//importing the schema model
const todo = require("../models/todoSchema");

//router handler 

async function updateToDo(req, res) {
    try {

        const { id } = req.params;
        const { title, description } = req.body;

        const todo = await todo.findByIdAndUpdate({ _id: id }, {
            title, description, updatedAt: Date.now()
        })

        //send an json response 
        res.status(200).json({
            success: true,
            data: todo,
            message: "Data Updated"
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



module.exports = updateToDo;

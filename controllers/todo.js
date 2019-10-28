const Todo= require('../models/todo');
const uuid= require('uuid/v4');


exports.createNewTodo = (req, res, next)=> {
    console.log("test");
    const id = req.body.id;
    const name = req.body.name;
    const description = req.body.description;
    const image= null;
    const createdAt= 12-22-1234;
    const dueDate = req.body.dueDate;
    
    if(id ,name,description,image,createdAt,dueDate) {

        const todoInstance = new Todo(id ,name,description,image,createdAt,dueDate);
        todoInstance.createTodo().then(result=>{
            console.log("todoSuccess:", result);
            res.json({
                status: "success"
            })
        })
        .catch(err=>{
            console.log("todoErr",err);
            res.json({
                status: "failure",
                error: err
            })
        })
    }
    else {
        res.json({
            status: "failure",
            error: "All fields are required"
        })
    }
}
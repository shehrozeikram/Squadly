const ToDoList = require('../models/toDoList');
const uuid= require('uuid/v4');

exports.createToDoList= (req, res, next)=> {
    var now = new Date();
    const dateTime = now.getFullYear() + '-' + (now.getMonth() + 1) +
     '-' + now.getDate() + ' ' + now.getHours()+":" + now.getMinutes() +
     ":" + now.getSeconds();

    const id = req.body.id;
    const name = req.body.name;
    const accountId = req.body.accountId;
    const createdAt = dateTime;

    if(id, name, accountId, createdAt) {
        const toDoList = new ToDoList(id, name, accountId, createdAt);
        toDoList.createToDoList().then(result=> {
            console.log("toDoListSuccess:", result);
            res.json({
                status: "success"
            })
        })
        .catch(err=>{
            console.log("toDoListErr",err);
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

exports.updateToDoList= (req, res, next)=> {

    const id = req.body.id;
    const name = req.body.name;

    if(id, name) {
        ToDoList.updateToDoList(id, name).then(result=> {
            console.log("updateToDoListSuccess:", result);
            res.json({
                status: "success"
            })
        })
        .catch(err=>{
            console.log("updateToDoListErr",err);
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
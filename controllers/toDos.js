const ToDo= require('../models/toDo');
const uuid= require('uuid/v4');

exports.createNewToDo = (req, res, next)=> {
    console.log("test");
    var now = new Date();
    const dateTime = now.getFullYear() + '-' + (now.getMonth() + 1) +
     '-' + now.getDate() + ' ' + now.getHours()+":" + now.getMinutes() +
     ":" + now.getSeconds();

    const id = req.body.id;
    const listId = req.body.listId;
    const description = req.body.description;
    const name = req.body.name;
    const image = req.files.image;
    const createdAt = dateTime;
    const dueDate = req.body.dueDate;

    if(id, listId, description, name, image, createdAt,
    dueDate) {

        if(image) {
            image.mv("./assets/toDo/"+"TI-"+id+".jpg", function(err) {
                if(err) {
                    console.log("Error while uploading image.");
                }
                else {
                    console.log("Image Uploaded");
                }
            });
        }
        
        let imageName = "TI-" + id;
        
        const toDo = new ToDo(id, listId, description, name, imageName, 
            createdAt,dueDate);
        toDo.createToDo().then(result=>{
            console.log("toDoSuccess:", result);
            res.json({
                status: "success"
            })
        })
        .catch(err=>{
            console.log("toDoErr",err);
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

exports.updateToDo = (req, res, next)=> {

    const id = req.body.id;
    const description = req.body.description;
    const name = req.body.name;
    const image = req.files.image;
    const dueDate = req.body.dueDate;

    if(id, description, name, image, dueDate) {

        if(image) {
            image.mv("./assets/toDo/"+"TI-"+id+".jpg", function(err) {
                if(err) {
                    console.log("Error while uploading image.");
                }
                else {
                    console.log("Image Uploaded");
                }
            });
        }
        
        let imageName = "TI-" + id;
        
        ToDo.updateToDo(id, description, name, imageName, dueDate)
        .then(result=>{
            console.log("updateToDoSuccess:", result);
            res.json({
                status: "success"
            })
        })
        .catch(err=>{
            console.log("updateToDoErr",err);
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

exports.removeToDo = (req , res , next)=>{
    const id      = req.body.id;

    if(id){
        ToDo.removeTODO(id)
        .then(result=>{
            console.log("removeTodoSuccess" , result);
            res.json({
                status: "success"
            });
        })
        .catch(err=>{
            console.log("removeTodoErr",err);
            res.json({
                status : "success"
            });
        })
    }else{
        res.json({
            status : "Failure",

        });
    }
}
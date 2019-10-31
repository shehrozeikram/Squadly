const ToDo= require('../models/toDo');
const uuid= require('uuid/v4');

exports.createNewToDo = (req, res, next)=> {
    var now = new Date();
    const dateTime = now.getFullYear() + '-' + (now.getMonth() + 1) +
     '-' + now.getDate() + ' ' + now.getHours()+":" + now.getMinutes() +
     ":" + now.getSeconds();

    const id = req.body.id;
    const listId = req.body.listId;
    const description = req.body.description;
    const name = req.body.name;
    const createdAt = dateTime;
    const dueDate = req.body.dueDate;
    let image = null;
    try {
        image = req.files.image;
    } catch (err) {
        image = null;
        console.log('Creating todo without Image!')
    }
    
    if(id, listId, description, name, image, createdAt,
    dueDate) {
        let imageName = ''
        if(image) {
            imageName = "TI-" + id;
            image.mv("./assets/toDo/"+"TI-"+id+".jpg", function(err) {
                if(err) {
                    console.log("Error while uploading image.");
                }
                else {
                    console.log("Image Uploaded");
                }
            });
        }       
        
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
    const dueDate = req.body.dueDate;

    let image = null;
    try {
        image = req.files.image;
    } catch (err) {
        image = null;
        console.log('Creating todo without Image!')
    }
    


    let imageName = ''
    if(id, description, image, dueDate) {
        if(image) {
            imageName = "TI-" + id;
            image.mv("./assets/toDo/"+"TI-"+id+".jpg", function(err) {
                if(err) {
                    console.log("Error while uploading image.");
                }
                else {
                    console.log("Image Uploaded");
                }
            });
        }
                
        ToDo.updateToDo(id, description, imageName, dueDate)
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

const Color= require('../models/color');
// const uuid= require('uuid/v4');

exports.createNewColor = (req, res, next)=> {
    console.log("test");
    const name = req.body.name;
    const color = req.body.color;
    
    if(name, color) {
        const colorInstance = new Color(name, color);
        colorInstance.createColor().then(result=>{
            console.log("colorSuccess:", result);
            res.json({
                status: "success"
            })
        })
        .catch(err=>{
            console.log("colorErr",err);
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

exports.updateColor= (req, res, next)=> {
    const name = req.body.name;
    const color = req.body.color;
    if(name, color) {
        Color.updateCurrentColor( name, color)
        .then(result=> {
            console.log("colorUpdateSuccess:", result);
            res.json({
                status: "success"
            })
        })
        .catch(err=>{
            console.log("colorUpdateErr",err);
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
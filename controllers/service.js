const Service= require('../models/service');
// const uuid= require('uuid/v4');

exports.createNewService = (req, res, next)=> {
    console.log("test");
    const name = req.body.name;
    const available = 1;
    
    if(name, available) {
        const service = new Service(name, available);
        service.createService().then(result=>{
            console.log("serviceSuccess:", result);
            res.json({
                status: "success"
            })
        })
        .catch(err=>{
            console.log("serviceErr",err);
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

exports.updateService= (req, res, next)=> {
    
    const name = req.body.name;
    const available = req.body.available;

    if(name, available) {
        Service.updateCurrentService(name, available)
        .then(result=> {
            console.log("serviceUpdateSuccess:", result);
            res.json({
                status: "success"
            })
        })
        .catch(err=>{
            console.log("serviceUpdateErr",err);
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
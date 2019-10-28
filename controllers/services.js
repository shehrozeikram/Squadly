const Service = require("../models/service");

exports.createNewService= (req, res, next)=> {
    const name = req.body.name;
    const available = 1;

    if(name, available) {
        const service = new Service(name, available);

        service.createService().then(result=> {
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
    const previousName = req.body.previousName;
    const newName = req.body.newName;

    if(previousName, newName) {
        Service.updateService(previousName, newName)
        .then(result=> {
            console.log("updateServiceSuccess:", result);
            res.json({
                status: "success"
            })
        })
        .catch(err=>{
            console.log("updateServiceErr",err);
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
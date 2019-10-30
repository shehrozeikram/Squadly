const Business= require('../models/business');
const uuid= require('uuid/v4');

exports.createNewBusiness = (req, res, next)=> {
    console.log("test");
    const id = req.body.id;
    const name = req.body.name;
    const contact = req.body.contact;
    const image= req.files.image;
    const accountId= req.body.accountId;
    const service= req.body.service;
    const available = 1;
    const createdFrom = req.body.createdFrom;

    if(id, name, contact, accountId, service, available,
        image, createdFrom) {

        if(image) {
            image.mv("./assets/businesses/"+"BI-"+id+".jpg", function(err) {
                if(err) {
                    console.log("Error while uploading image.");
                }
                else {
                    console.log("Image Uploaded");
                }
            });
        }
        
        let imageName = "BI-" + id;
        
        const business = new Business(id, contact, name, imageName, 
            available, accountId, service, createdFrom);
        business.createBusiness().then(result=>{
            console.log("businessSuccess:", result);
            res.json({
                status: "success"
            })
        })
        .catch(err=>{
            console.log("businessErr",err);
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

exports.updateBusiness= (req, res, next)=> {
    const id = req.body.id;
    const name = req.body.name;
    const contact = req.body.contact;
    const image= req.files.image;
    const service= req.body.service;

    if(id, name, contact, image, service) {
        if(image) {
            image.mv("./assets/businesses/"+"BI-"+id+".jpg", function(err) {
                if(err) {
                    console.log("Error while uploading image.");
                }
                else {
                    console.log("Image Uploaded");
                }
            });
        }
        
        let imageName = "BI-" + id;

        Business.updateCurrentBusiness(id, contact, name, imageName, service)
        .then(result=> {
            console.log("businessUpdateSuccess:", result);
            res.json({
                status: "success"
            })
        })
        .catch(err=>{
            console.log("businessUpdateErr",err);
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

exports.addNewBusinessEmployee= (req, res, next)=> {
    const bid= req.body.bid;
    const accountId= req.body.accountId;
    const status= true;

    if(bid, accountId, status) {
        Business.addBusinessEmployee(bid,accountId,status)
        .then(result=> {
            console.log("addBusinessEmployeeSuccess:", result);
            res.json({
                status: "success"
            })
        })
        .catch(err=>{
            console.log("addBusinessEmployeeErr",err);
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

exports.removeBusinessEmployee= (req, res, next)=> {
    const bid= req.body.bid;
    const accountId= req.body.accountId;

    if(bid, accountId) {
        Business.removeBusinessEmployee(bid,accountId)
        .then(result=> {
            console.log("removeBusinessEmployeeSuccess:", result);
            res.json({
                status: "success"
            })
        })
        .catch(err=>{
            console.log("removeBusinessEmployeeErr",err);
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
const Squad= require('../models/squad');
const uuid= require('uuid/v4');

exports.createNewSquad= (req, res, next)=> {
    console.log("test");
    var now = new Date();
    const dateTime = now.getFullYear() + '-' + (now.getMonth() + 1) +
     '-' + now.getDate() + ' ' + now.getHours()+":" + now.getMinutes() +
     ":" + now.getSeconds();

    const id = req.body.id;
    const name = req.body.name;
    const location = req.body.location;
    const contact = req.body.contact;
    const image = req.files.image;
    const team = req.body.team;
    const bid = req.body.bid;
    const available = 1;
    const createdAt = dateTime;
    const createdFrom = req.body.createdFrom;

    console.log(createdAt);

    if(id, name, location, contact, image, team, bid, available, 
    createdAt, createdFrom) {
        if(image) {
            image.mv("./assets/squads/"+"SI-"+id+".jpg", function(err) {
                if(err) {
                    console.log("Error while uploading image.");
                }
                else {
                    console.log("Image Uploaded");
                }
            });
        }    
        let imageName = "SI-" + id;

        const squad = new Squad(id, name, location, contact, imageName,
             team, bid, available, createdAt, createdFrom);
        
        squad.createSquad().then(result=> {
            console.log("squadSuccess:", result);
            res.json({
                status: "success"
            })
        })
        .catch(err=>{
            console.log("squadErr",err);
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

exports.updateSquad= (req, res, next)=> {
    const id = req.body.id;
    const name = req.body.name;
    const location = req.body.location;
    const contact = req.body.contact;
    const image = req.files.image;

    if(id, name, image, location, contact) {

        if(image) {
            image.mv("./assets/squads/"+"SI-"+id+".jpg", function(err) {
                if(err) {
                    console.log("Error while uploading image.");
                }
                else {
                    console.log("Image Uploaded");
                }
            });
        }    
        let imageName = "SI-" + id;

        Squad.updateCurrentSquad(id, name, location, contact, imageName)
        .then(result=> {
            console.log("updateSquadSuccess:", result);
            res.json({
                status: "success"
            })
        })
        .catch(err=>{
            console.log("updateSquadErr",err);
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

exports.addNewSquadMember= (req, res, next)=> {
    const squadId = req.body.squadId;
    const accountId = req.body.accountId;
    const scheduler = req.body.scheduler;

    if(squadId, accountId, scheduler) {
        Squad.addSquadMember(squadId, accountId, scheduler)
        .then(result=> {
            console.log("squadMemberSuccess:", result);
            res.json({
                status: "success"
            })
        })
        .catch(err=>{
            console.log("squadMemberErr",err);
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

exports.removeSquadMember= (req, res, next)=> {
    const squadId = req.body.squadId;
    const accountId = req.body.accountId;

    if(squadId, accountId) {
        Squad.removeSquadMember(squadId, accountId)
        .then(result=> {
            console.log("removeSquadMemberSuccess:", result);
            res.json({
                status: "success"
            })
        })
        .catch(err=>{
            console.log("removeSquadMemberErr",err);
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
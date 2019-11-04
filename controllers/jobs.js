const Job = require('../models/job');
const uuid= require('uuid/v4');

exports.createJob= (req, res, next)=> {
    var now = new Date();
    const dateTime = now.getFullYear() + '-' + (now.getMonth() + 1) +
     '-' + now.getDate() + ' ' + now.getHours()+":" + now.getMinutes() +
     ":" + now.getSeconds();

    const id= req.body.id;
    const squadId= req.body.squadId;
    const accountId= req.body.accountId;
    const description= req.body.description;
    const location= req.body.location;
    const date= req.body.date;
    const startTime= req.body.startTime;
    const endTime= req.body.endTime;
    const createdAt= dateTime;
    const status= "Pending";
    const createdFrom= req.body.createdFrom;

    if(id, squadId, accountId, description, location, 
    date, startTime, endTime, createdAt, status, createdFrom) {

        const job = new Job(id, squadId, accountId, description, location, 
            date, startTime, endTime, createdAt, status, createdFrom);
        job.createJob().then(result=> {
            console.log("jobSuccess:", result);
            res.json({
                status: "success"
            })
        })
        .catch(err=>{
            console.log("jobErr",err);
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

exports.updateJob= (req, res, next)=> {

    const id= req.body.id;
    const description= req.body.description;
    const location= req.body.location;
    const date= req.body.date;
    const startTime= req.body.startTime;
    const endTime= req.body.endTime;

    if(id, description, location, date, startTime, endTime) {

        Job.updateJob(id, description, location, date, startTime, endTime)
        .then(result=> {
            console.log("jobUpdateSuccess:", result);
            res.json({
                status: "success"
            })
        })
        .catch(err=>{
            console.log("jobUpdateErr",err);
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

exports.rescheduleJob= (req, res, next)=> {

    const id= req.body.id;
    const date= req.body.date;
    const startTime= req.body.startTime;
    const endTime= req.body.endTime;
    const reason= req.body.reason;
    const rescheduledId= id;

    if(id, date, startTime, endTime, reason, rescheduledId) {

        Job.rescheduleJob(id, date, startTime, endTime, reason, rescheduledId)
        .then(result=> {
            console.log("jobRescheduleSuccess:", result);
            res.json({
                status: "success"
            })
        })
        .catch(err=>{
            console.log("jobRescheduleErr",err);
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

exports.updateJobStatus = (req , res , next)=>{
        const id = req.body.id; 
        const status = req.body.status;

        if(id , status){
            Job.updateJobStatus(id , status)
            .then(result=>{
                res.json({
                    status : "success",
                    res : result
                })
            })
            .catch(err=>{
                res.json({
                    status : "Error",
                    Error : err
                })
            })
        }else{
            res.json({
                status : "Failure",
                error : err
            })
        }
}
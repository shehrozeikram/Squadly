const JobTask = require('../models/jobTask');

exports.createNewJobTask= (req, res, next)=> {
    const jobId = req.body.jobId;
    const description = req.body.description;
    const status = "Pending";

    if(jobId, description, status) {
        const jobTask = new JobTask(jobId, description, status);
        jobTask.createJobTask().then(result=> {
            console.log("jobTaskSuccess:", result);
            res.json({
                status: "success"
            })
        })
        .catch(err=>{
            console.log("jobTaskErr",err);
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

exports.updateJobTask= (req, res, next)=> {
    const id = req.body.id
    const jobId = req.body.jobId;
    const description = req.body.description;
    const status = req.body.status;

    if(id, jobId, description, status) {
        JobTask.updateJobTask(id, jobId, description, status)
        .then(result=> {
            console.log("updateJobTaskSuccess:", result);
            res.json({
                status: "success"
            })
        })
        .catch(err=>{
            console.log("updateJobTaskErr",err);
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
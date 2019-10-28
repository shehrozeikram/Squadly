const Calender = require('../models/calendar');
const uuid = require('uuid/v4');

exports.createNewCalendar= (req, res, next)=> {
    var now = new Date();
    const dateTime = now.getFullYear() + '-' + (now.getMonth() + 1) +
     '-' + now.getDate() + ' ' + now.getHours()+":" + now.getMinutes() +
     ":" + now.getSeconds();

    const id = uuid();
    const name = req.body.name;
    const accountId = req.body.accountId;
    const colorId = req.body.colorId;
    const createdAt = dateTime;

    if(id, name, accountId, colorId, createdAt) {
        const calendar = new Calender(id, name, accountId, colorId, 
        createdAt);
        calendar.createCalendar().then(result=> {
            console.log("calendarSuccess:", result);
           res.json({
               status: "success"
           })
        })
        .catch(err=>{
            console.log("calendarErr",err);
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

exports.updateCalendar= (req, res, next)=> {

    const id = req.body.id;
    const name = req.body.name;
    const colorId = req.body.colorId;

    if(id, name, colorId) {
        Calendar.updateCalendar(id, name, colorId)
        .then(result=> {
            console.log("calendarUpdateSuccess:", result);
           res.json({
               status: "success"
           })
        })
        .catch(err=>{
            console.log("calendarUpdateErr",err);
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
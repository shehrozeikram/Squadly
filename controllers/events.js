const Events = require('../models/events');
const uuid = require('uuid/v4');

exports.createNewEvents= (req, res, next)=> {

    const id = uuid();
    const calendarID = req.body.calendarID;
    const titile = req.body.titile;
    const location = req.body.location;
    const salt = req.body.salt;
    const endDate = req.body.endDate;
    const allDay = req.body.allDay;
    const notes = req.body.notes;
    const recurring = req.body.recurring;
    const recurringDate = req.body.recurringDate;

    if(id,calendarID,titile,location,salt,endDate,allDay,notes,recurring,recurringDate) {
        const events = new Events(id,calendarID,titile,location,salt,endDate,allDay,
            notes,recurring,recurringDate);
        events.createEvents().then(result=> {
            console.log("eventSuccess:", result);
           res.json({
               status: "success"
           })
        })
        .catch(err=>{
            console.log("eventErr",err);
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

exports.updateEvents= (req, res, next)=> {

    const id = req.body.id;
    const calendarID = req.body.calendarID;
    const titile = req.body.titile;
    const location = req.body.location;
    const salt = req.body.salt;
    const endDate = req.body.endDate;
    const allDay = req.body.allDay;
    const notes = req.body.notes;
    const recurring = req.body.recurring;
    const recurringDate = req.body.recurringDate;

    if(id,calendarID,titile,location,salt,endDate,allDay,notes,recurring,recurringDate) {
        Events.updateEvents(id,calendarID,titile,location,salt,endDate,allDay,notes,recurring,recurringDate)
        .then(result=> {
            console.log("eventsUpdateSuccess:", result);
           res.json({
               status: "success"
           })
        })
        .catch(err=>{
            console.log("eventsUpdateErr",err);
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
 
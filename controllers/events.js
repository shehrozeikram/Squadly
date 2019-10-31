const uuid = require('uuid/v4');
const Event = require('../models/event');

exports.createNewEvent= (req, res, next)=> {
   const id = req.body.id;
   const calendarId = req.body.calendarId;
   const accountId = req.body.accountId;
   const title = req.body.title;
   const location = req.body.location;
   const endDate = req.body.endDate;
   const allDay = req.body.allDay;
   const notes = req.body.notes;
   const recurring = false;

   if(id,calendarId,accountId, title,location,endDate,allDay,notes) {

       const events = new Event(id,calendarId,accountId,title,location,endDate,allDay,
           notes,recurring);

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


exports.updateEvent= (req, res, next)=> {

   const id = req.body.id;
   const calendarId = req.body.calendarId;
   const title = req.body.title;
   const location = req.body.location;
   const endDate = req.body.endDate;
   const allDay = req.body.allDay;
   const notes = req.body.notes;

   if(id,calendarId,title,location,endDate,allDay,notes) {

       Event.updateEvents(id,calendarId,title,location,endDate,allDay,notes)
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


exports.removeEvent = (req , res , next)=>{
    const id = req.body.id;
    if(id){
        Event.removeEvents(id)
        .then(result=>{
            console.log("RemoveEventSuccess" , result);
            res.json({
                status : "success"
            })
        })
        .catch(err=>{
            console.log("RemoveEventError" , err);
            res.json({
                status : "Error"
            })
        })
    }else{
        res.json({
            status : "Failure",
            "Error" : err
        });
    }
}


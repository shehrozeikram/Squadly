// const Calender = require('../models/calendar');
// const uuid = require('uuid/v4');

exports.createNewChat= (req, res, next)=> {
    socket.emit('add-user',{
        username : req.user.username
    });

     //message send from user
     socket.emit('message',{
        sender : req.user.username,
        // sender : "senderr",
        receiver : req.body.receiver,
        message : req.body.message,
        media : false
    });

     //msg typing
     socket.emit('typing',{
        username : req.user.username,
        // username : "somename",
        to : "receiver's name"
    });

    //typing indication to reciever
    socket.on('typing-to',function(data){
        console.log(data.username);
    });

    //// client msg receive 
    socket.on('message-receiver',function(data){
        console.log(data.message);
    });

    // /read msg
        socket.emit('message-read',{
            messageid : message._id 
        });

     //notification for unread msg
     socket.on('unread-messages',function(data){
        console.log(data.res);
     });    

    };
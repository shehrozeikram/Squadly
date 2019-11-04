const User = require('../models/user');
const jwt= require('jsonwebtoken');
const uuid= require('uuid/v4');
const bcrypt= require('bcryptjs');
const Calendar= require('../models/calendar');
const ToDoList= require('../models/toDoList');

exports.signup= async (req, res)=> {
    var now = new Date();
    const dateTime = now.getFullYear() + '-' + (now.getMonth() + 1) +
     '-' + now.getDate() + ' ' + now.getHours()+":" + now.getMinutes() +
     ":" + now.getSeconds();

    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const lastLogin = dateTime;
    const createdFrom = req.body.createdFrom;
    const phoneNumber = req.body.phoneNumber;
    const createdAt = dateTime;  
    if(email === '' || password === '') {
        res.json({
            status: "failure",
            error: "Email or Password cannot be empty!"
        })
        return 
    }
    if(id, name, email, password, lastLogin, createdFrom, phoneNumber, createdAt) {
        User.emailExistence(email).then(async ([rows])=> {
            console.log("rows", rows[0].length);
            if(rows[0].length) {
                res.json({
                    status: "failure",
                    error: "Email already exists."
                })
            }
            else {
                const salt = await bcrypt.genSalt(10);
                console.log("salttt", salt);

                await bcrypt.hash(password.trim(), salt,
                function(err, hashPassword) {
                    console.log("passs", hashPassword);

                    const user = new User(id, name, email, hashPassword, lastLogin, createdFrom, phoneNumber, createdAt, salt);
                    user.createUser().then(result=>{
                        console.log("success:", result);

                        var calendarId = uuid();
                        var calendarName = "Personal";
                        var accountId = id;
                        var colorId = "#EC547A";
                        var calendarCreatedAt = dateTime;
                        const calendar = new Calendar(calendarId, calendarName, accountId,
                            colorId, calendarCreatedAt);
                        calendar.createCalendar().then(result=> {
                            console.log("Calendar created on signup");
                        })
                        .catch(err=> {

                            console.log("Error on calendar creation during signup", err);
                        })

                        var toDoListId = uuid();
                        var toDoListName = "Personal";
                        var toDoListAccountId = id
                        var toDoListCreatedAt = dateTime;
                        const toDoList = new ToDoList(toDoListId, toDoListName,
                            toDoListAccountId, toDoListCreatedAt);
                        toDoList.createToDoList().then(result=> {
                            console.log("ToDoList created on signup");
                        })
                        .catch(err=> {

                            console.log("Error on ToDoList creation during signup", err);
                        })

                        const token = jwt.sign(
                            {
                                email: email
                            }, 
                            'secretcode'
                            // , {expiresIn: '1h'}
                        );
                        res.json({
                            status: "success",
                            token: token,
                            userId: id
                        })
                    })
                    .catch(err=>{
                        console.log("err",err);
                        res.json({
                            status: "failure",
                            error: err
                        })
                    }) 
                });
            }
        })         
    }
    else {
        res.json({
            status: "failure",
            error: "All fields are required"
        })
    }

}

exports.login= async (req, res, next)=> {
    var now = new Date();
    const dateTime = now.getFullYear() + '-' + (now.getMonth() + 1) +
     '-' + now.getDate() + ' ' + now.getHours()+":" + now.getMinutes() +
     ":" + now.getSeconds();

     const email = req.body.email;
     const password = req.body.password;
     const loginTime = dateTime;
    console.log("Login request generated: ", req.body)
     if(email, password, loginTime) {
        if(email === '' || password === '') {
            res.json({
                status: "failure",
                error: "Email or Password cannot be empty!"
            })
            return 
        }
        User.loginUser(email).then(async ([rows, dataField])=> {
            // console.log("rowsss",rows[0][0].password);

            await bcrypt.compare(password, rows[0][0].password, 
            function(err, result) {
                if(result) {
                    console.log("ress", result);
                    User.updateLastLogin(rows[0][0].ID,loginTime)
                    .then(r=> {
                        console.log("lastLogin updated");
                    });
                    const token = jwt.sign(
                        {
                            email: email
                        }, 
                        'secretcode',
                        {expiresIn: '1h'}
                    );
                    res.json({
                        status: "success",
                        token: token,
                        data: rows[0][0]
                    })
                }
                else {
                    console.log("errrrr", err);
                    res.json({
                        status: "failure",
                        error: "Wrong Password"
                    })
                }
            })
        })
        .catch(err=>{
            console.log("err",err);
            res.json({
                status: "failure",
                error: "Email dont exist"
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

exports.setAvailability = async (req, res) => {
    const now = new Date();
    const Time = now.getHours()+":" + now.getMinutes() +
    ":" + now.getSeconds();

    console.log("Req for setAvailability received.\nReq.body: ", req.body)
    console.log("TO BE IMPLEMENTED")
    console.log("Here:", (req.body.Monday).to)
    // console.log(JSON.parse('{ "name":"John", "age":30, "city":"New York"}').name)
    // res.send("error")
    const MondayTo = req.body.Monday.to;
    const MondayFrom = req.body.Monday.from;
    const TuesdayTo = req.body.Tuesday.to;
    const TuesdayFrom = req.body.Tuesday.from;
    const WednesdayTo = req.body.Wednesday.to;
    const WednesdayFrom = req.body.Wednesday.from;
    const ThursdayTo = req.body.Thursday.to;
    const ThursdayFrom = req.body.Thursday.from;
    const FridayTo = req.body.Friday.to;
    const FridayFrom = req.body.Friday.from;
    const SaturdayTo = req.body.Saturday.to;
    const SaturdayFrom = req.body.Saturday.from;
    const SundayTo = req.body.Sunday.to;
    const SundayFrom = req.body.Sunday.from;
    const accountId = req.body.accountId;

    if(MondayTo,MondayFrom,TuesdayTo,TuesdayFrom,WednesdayTo,WednesdayFrom,ThursdayTo
        ,ThursdayFrom,FridayTo,FridayFrom,SaturdayTo,SaturdayFrom,SundayTo,SundayFrom,accountId) {
    console.log("text" ,MondayTo);
            User.setAvailability(MondayTo , MondayFrom ,TuesdayTo ,TuesdayFrom , WednesdayTo ,
                WednesdayFrom , ThursdayTo , ThursdayFrom ,FridayTo ,  FridayFrom , 
                SaturdayTo ,SaturdayFrom ,  SundayTo ,  SundayFrom ,accountId)
                .then(result=> {
                console.log("AvailabilitySuccess:", result);
                res.json({
                    status: "success"
                })
            })
            .catch(err=>{
                console.log("AvailabilityErr",err);
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

    ///////////////////////////////////////////////////////////////
    // This is the log of req.body
    // Req.body:  {
    //   Wednesday: { to: '23:00', name: 'Wed', from: '09:00' },
    //   Tuesday: { to: '23:00', name: 'Tue', from: '09:00' },
    //   Thursday: { to: '23:00', name: 'Thu', from: '09:00' },
    //   Sunday: { to: '00:00', name: 'Sun', from: '09:00' },
    //   Saturday: { to: '23:00', name: 'Sat', from: '09:00' },
    //   Monday: { to: '23:00', name: 'Mon', from: '09:00' },
    //   Friday: { to: '23:00', name: 'Fri', from: '09:00' },
    //   accountId: 'MKllEiPrcSRoakxJpiPVPvLSnlE3'
    // }
    ///////////////////////////////////////////////////////////////
    // res.json({
    //     status: "TO BE IMPLEMENTED",
    //     message: "Req successfully received!"
    // })
}
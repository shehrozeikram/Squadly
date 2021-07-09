const User = require('../models/user');
const jwt = require('jsonwebtoken');
const uuid = require('uuid/v4');
const bcrypt = require('bcryptjs');
const Calendar = require('../models/calendar');
const ToDoList = require('../models/toDoList');


exports.signup = async (req, res) => {

    var now = new Date();
    const dateTime = now.getFullYear() + '-' + (now.getMonth() + 1) +
        '-' + now.getDate() + ' ' + now.getHours() + ":" + now.getMinutes() +
        ":" + now.getSeconds();
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const lastLogin = dateTime;
    const createdFrom = req.body.createdFrom;
    const phoneNumber = req.body.phoneNumber;
    const createdAt = dateTime;
    const calendarId = req.body.calendarId;
    const toDoListId = req.body.toDoListId;
    if (email === '' || password === '') {
        res.json({
            status: "failure",
            error: "Email or Password cannot be empty!"
        })
        return
    }
    User.emailExistence(email).then(async ([rows]) => {
        console.log("rows", rows[0].length);
        if (rows[0].length) {
            res.json({
                status: "failure",
                error: "Email already exists."
            })
        } 

        if (id, name, email, password, lastLogin, createdFrom, phoneNumber, createdAt, calendarId, toDoListId) {
            const salt = await bcrypt.genSalt(10);
            console.log("salttt", salt);

            await bcrypt.hash(password.trim(), salt,
                function (err, hashPassword) {
                    console.log("passs", hashPassword); {
                        const user = new User(id, name, email, hashPassword, salt, lastLogin, createdFrom, phoneNumber, createdAt,
                            calendarId, toDoListId);
                        user.createUser().then(result => {

                            if (result[0][1].serverStatus == 34) {
                                res.json({
                                    status: "Success",
                                    res: result[0]
                                })
                            }
                            else {
                                res.json({
                                    status: "Failure",
                                    res: result[0]
                                })
                            }


                        })
                            .catch(err => {
                                res.json({
                                    status: "error between signup",
                                    error: err
                                })
                            })
                    }
                })


        } else {
            res.json({
                status: "failure"
            })
        }
    })

}



// exports.signup = async (req , res)=>{

//     var now = new Date();
//     const dateTime = now.getFullYear() + '-' + (now.getMonth() + 1) +
//         '-' + now.getDate() + ' ' + now.getHours() + ":" + now.getMinutes() +
//         ":" + now.getSeconds();
//         const id = req.body.id;
//         const name = req.body.name;
//         const email = req.body.email;
//         const password = req.body.password;
//         const salt = req.body.salt;
//         const lastLogin = dateTime;
//         const createdFrom = req.body.createdFrom;
//         const phoneNumber = req.body.phoneNumber;
//         const createdAt = dateTime;
//         const calendarId = req.body.calendarId;
//         const toDoListId = req.body.toDoListId;

//         if(email === '' || password === '') {
//                     res.json({
//                         status: "failure",
//                         error: "Email or Password cannot be empty!"
//                     })
//                     return
//                 }
//                 User.emailExistence(email).then(async ([rows]) => {
//                                 console.log("rows", rows[0].length);
//                                 if (rows[0].length) {
//                                     res.json({
//                                         status: "failure",
//                                         error: "Email already exists."
//                                     })
//                                 } 


//         if(id,name,email,password,salt,lastLogin,createdFrom,phoneNumber,createdAt,calendarId,toDoListId){
//             const salt = await bcrypt.genSalt(10);
//                     console.log("salttt", salt);

//             await bcrypt.hash(password.trim(), salt,
//                     function (err, hashPassword){
//           const user = new User(id,name,email,hashPassword,salt,lastLogin,createdFrom,phoneNumber,createdAt,
//             calendarId, toDoListId);
//           user.createUser().then(result =>{

//                 res.json({
//                     status : "Done",
//                     res : result
//                 })

//           }).catch(err=>{
//               res.json({
//                   status : "failed",

//                   error : err
//               })
//           })
//         }
//             )}
//     })

//     }







// exports.signup = async (req, res) => {
//     var now = new Date();
//     const dateTime = now.getFullYear() + '-' + (now.getMonth() + 1) +
//         '-' + now.getDate() + ' ' + now.getHours() + ":" + now.getMinutes() +
//         ":" + now.getSeconds();

//     const id = req.body.id;
//     const name = req.body.name;
//     const email = req.body.email;
//     const password = req.body.password;
//     const lastLogin = dateTime;
//     const createdFrom = req.body.createdFrom;
//     const phoneNumber = req.body.phoneNumber;
//     const createdAt = dateTime;
//     if (email === '' || password === '') {
//         res.json({
//             status: "failure",
//             error: "Email or Password cannot be empty!"
//         })
//         return
//     }
//     if (id, name, email, password, lastLogin, createdFrom, phoneNumber, createdAt) {
//         User.emailExistence(email).then(async ([rows]) => {
//             console.log("rows", rows[0].length);
//             if (rows[0].length) {
//                 res.json({
//                     status: "failure",
//                     error: "Email already exists."
//                 })
//             } else {
//                 const salt = await bcrypt.genSalt(10);
//                 console.log("salttt", salt);

//                 await bcrypt.hash(password.trim(), salt,
//                     function (err, hashPassword) {
//                         console.log("passs", hashPassword);

//                         const user = new User(id, name, email, hashPassword, lastLogin, createdFrom, phoneNumber, createdAt, salt);
//                         user.createUser().then(result => {
//                                 console.log("success:", result);

//                                 var calendarId = uuid();
//                                 var calendarName = "Personal";
//                                 var accountId = id;
//                                 var colorId = "#EC547A";
//                                 var calendarCreatedAt = dateTime;
//                                 const calendar = new Calendar(calendarId, calendarName, accountId,
//                                     colorId, calendarCreatedAt);
//                                 calendar.createCalendar().then(result => {
//                                         console.log("Calendar created on signup");
//                                     })
//                                     .catch(err => {

//                                         console.log("Error on calendar creation during signup", err);
//                                     })

//                                 var toDoListId = uuid();
//                                 var toDoListName = "Personal";
//                                 var toDoListAccountId = id
//                                 var toDoListCreatedAt = dateTime;
//                                 const toDoList = new ToDoList(toDoListId, toDoListName,
//                                     toDoListAccountId, toDoListCreatedAt);
//                                 toDoList.createToDoList().then(result => {
//                                         console.log("ToDoList created on signup");
//                                     })
//                                     .catch(err => {

//                                         console.log("Error on ToDoList creation during signup", err);
//                                     })

//                                 const MondayFrom ='00:00:00';
//                                 const MondayTo ='00:00:00';
//                                 const TuesdayFrom ='00:00:00';
//                                 const TuesdayTo ='00:00:00';
//                                 const WednesdayFrom ='00:00:00';
//                                 const WednesdayTo ='00:00:00';
//                                 const ThursdayFrom ='00:00:00';
//                                 const ThursdayTo ='00:00:00';
//                                 const FridayFrom ='00:00:00';
//                                 const FridayTo ='00:00:00';
//                                 const SaturdayFrom ='00:00:00';
//                                 const SaturdayTo ='00:00:00';
//                                 const SundayFrom ='00:00:00';
//                                 const SundayTo ='00:00:00';
//                                 // const accountId = id;



//                                 User.setAvailability(MondayFrom, MondayTo, TuesdayFrom, TuesdayTo, WednesdayFrom,
//                                         WednesdayTo, ThursdayFrom, ThursdayTo, FridayFrom, FridayTo,
//                                         SaturdayFrom, SaturdayTo, SundayFrom, SundayTo, accountId)
//                                     .then(result => {
//                                         console.log("Success on setAvailability", result);
//                                     })
//                                     .catch(err => {
//                                         console.log("Error on setAvailability creation during signup", err);
//                                     })

//                                 const token = jwt.sign({
//                                         email: email
//                                     },
//                                     'secretcode'
//                                     // , {expiresIn: '1h'}
//                                 );
//                                 res.json({
//                                     status: "success",
//                                     token: token,
//                                     userId: id
//                                 })
//                             })
//                             .catch(err => {
//                                 console.log("err", err);
//                                 res.json({
//                                     status: "failure",
//                                     error: err
//                                 })
//                             })
//                     });
//             }
//         })
//     } else {
//         res.json({
//             status: "failure",
//             error: "All fields are required"
//         })
//     }

// }

exports.login = async (req, res, next) => {
    var now = new Date();
    const dateTime = now.getFullYear() + '-' + (now.getMonth() + 1) +
        '-' + now.getDate() + ' ' + now.getHours() + ":" + now.getMinutes() +
        ":" + now.getSeconds();

    const email = req.body.email;
    const password = req.body.password;
    const loginTime = dateTime;
    console.log("Login request generated: ", req.body)
    if (email, password, loginTime) {
        if (email === '' || password === '') {
            res.json({
                status: "failure",
                error: "Email or Password cannot be empty!"
            })
            return
        }
        User.loginUser(email).then(async ([rows, dataField]) => {
            // console.log("rowsss",rows[0][0].password);

            await bcrypt.compare(password, rows[0][0].password,
                function (err, result) {
                    if (result) {
                        console.log("ress", result);
                        User.updateLastLogin(rows[0][0].ID, loginTime)
                            .then(r => {
                                console.log("lastLogin updated");
                            });
                        const token = jwt.sign({
                            email: email
                        },
                            'secretcode', {
                            expiresIn: '1h'
                        }
                        );
                        res.json({
                            status: "success",
                            token: token,
                            data: rows[0][0]
                        })
                    } else {
                        console.log("errrrr", err);
                        res.json({
                            status: "failure",
                            error: "Wrong Password"
                        })
                    }
                })
        })
            .catch(err => {
                console.log("err", err);
                res.json({
                    status: "failure",
                    error: "Email dont exist"
                })
            })
    } else {
        res.json({
            status: "failure",
            error: "All fields are required"
        })
    }
}

exports.setAvailability = async (req, res) => {
    const now = new Date();
    const Time = now.getHours() + ":" + now.getMinutes() +
        ":" + now.getSeconds();

    console.log("Req for setAvailability received.\nReq.body: ", req.body)
    // console.log("Here:", (req.body.Monday).to)
    // console.log(JSON.parse('{ "name":"John", "age":30, "city":"New York"}').name)
    // res.send("error")
    const MondayFrom = req.body.Monday.from;
    const MondayTo = req.body.Monday.to;
    const TuesdayFrom = req.body.Tuesday.from;
    const TuesdayTo = req.body.Tuesday.to;
    const WednesdayFrom = req.body.Wednesday.from;
    const WednesdayTo = req.body.Wednesday.to;
    const ThursdayFrom = req.body.Thursday.from;
    const ThursdayTo = req.body.Thursday.to;
    const FridayFrom = req.body.Friday.from;
    const FridayTo = req.body.Friday.to;
    const SaturdayFrom = req.body.Saturday.from;
    const SaturdayTo = req.body.Saturday.to;
    const SundayFrom = req.body.Sunday.from;
    const SundayTo = req.body.Sunday.to;
    const accountId = req.body.accountId;

    if (MondayFrom, MondayTo, TuesdayFrom, TuesdayTo, WednesdayFrom, WednesdayTo, ThursdayFrom, ThursdayTo, FridayFrom, FridayTo, SaturdayFrom, SaturdayTo, SundayFrom, SundayTo, accountId) {
        // console.log("text" ,MondayTo);
        User.setAvailability(MondayFrom, MondayTo, TuesdayFrom, TuesdayTo, WednesdayFrom,
            WednesdayTo, ThursdayFrom, ThursdayTo, FridayFrom, FridayTo,
            SaturdayFrom, SaturdayTo, SundayFrom, SundayTo, accountId)
            .then(result => {
                console.log("AvailabilitySuccess:", result);
                res.json({
                    status: "success"
                })
            })
            .catch(err => {
                console.log("AvailabilityErr", err);
                res.json({
                    status: "failure",
                    error: err
                })
            })
    } else {
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

exports.updateSetAvailability = async (req, res, next) => {
    const now = new Date();
    const Time = now.getHours() + ":" + now.getMinutes() +
        ":" + now.getSeconds();
    console.log("Req for updateSetAvailability received.\nReq.body: ", req.body)

    const MondayFrom = req.body.Monday.from;
    const MondayTo = req.body.Monday.to;
    const TuesdayFrom = req.body.Tuesday.from;
    const TuesdayTo = req.body.Tuesday.to;
    const WednesdayFrom = req.body.Wednesday.from;
    const WednesdayTo = req.body.Wednesday.to;
    const ThursdayFrom = req.body.Thursday.from;
    const ThursdayTo = req.body.Thursday.to;
    const FridayFrom = req.body.Friday.from;
    const FridayTo = req.body.Friday.to;
    const SaturdayFrom = req.body.Saturday.from;
    const SaturdayTo = req.body.Saturday.to;
    const SundayFrom = req.body.Sunday.from;
    const SundayTo = req.body.Sunday.to;
    const accountId = req.body.accountId;

    if (MondayFrom, MondayTo, TuesdayFrom, TuesdayTo, WednesdayFrom, WednesdayTo,
        ThursdayFrom, ThursdayTo, FridayFrom, FridayTo, SaturdayFrom, SaturdayTo,
        SundayFrom, SundayTo, accountId) {
        User.updateSetAvailability(MondayFrom, MondayTo, TuesdayFrom, TuesdayTo, WednesdayFrom,
            WednesdayTo, ThursdayFrom, ThursdayTo, FridayFrom, FridayTo,
            SaturdayFrom, SaturdayTo, SundayFrom, SundayTo, accountId)
            .then(result => {
                res.json({
                    status: "Success",
                    res: result

                })
            })
            .catch(err => {
                res.json({
                    status: "failure",
                    error: err
                })
            })
    } else {
        res.json({
            status: "failure"
        })
    }
}

exports.updateSignUp = async (req, res, next) => {
    console.log("Req for updateSignUp received.\nReq.body: ", req.body);
    const id = req.body.accountId;
    const name = req.body.name;
    const image = req.body.image;
    const email = req.body.email;

    if (id, name, image, email) {
        User.updateSignUp(id, name, image, email)
            .then(result => {
                res.json({
                    status: "Success",
                    res: result
                })
            })
            .catch(err => {
                res.json({
                    status: "Error",
                    Error: err
                })
            })
    } else {
        res.json({
            status: "Failure",
        })
    }

}
const User = require('../models/user');
const jwt= require('jsonwebtoken');
const uuid= require('uuid/v4');
const bcrypt= require('bcryptjs');

exports.signup= async (req, res)=> {
    var now = new Date();
    const dateTime = now.getFullYear() + '-' + (now.getMonth() + 1) +
     '-' + now.getDate() + ' ' + now.getHours()+":" + now.getMinutes() +
     ":" + now.getSeconds();

    const id = uuid();
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const lastLogin = dateTime;
    const createdFrom = req.body.createdFrom;
    const phoneNumber = req.body.phoneNumber;
    const createdAt = dateTime;  

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

                    const user = new User(id, name, email, password, lastLogin, createdFrom, phoneNumber, createdAt, salt);
                    user.createUser().then(result=>{
                        console.log("success:", result);
                        const token = jwt.sign(
                            {
                                email: email
                            }, 
                            'secretcode'
                            // , {expiresIn: '1h'}
                        );
                        res.json({
                            status: "success",
                            token: token
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

     if(email, password, loginTime) {
         
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
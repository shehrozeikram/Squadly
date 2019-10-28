const User = require('../models/user');
const jwt= require('jsonwebtoken');
const uuid= require('uuid/v4');
const bcrypt= require('bcryptjs');

exports.signup= async (req,res,next)=> {
    const id = uuid();
    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;
    const available = 1;
    

    if(id, userName, email, password, available) {
        const hashPassword=await bcrypt.hash(password.trim(), 10);
        
        const user = new User(id, userName, email, hashPassword, available);
        user.createUser().then(result=>{
            console.log("success:", result);
            const token = jwt.sign(
                {
                    email: email
                }, 
                'secretcode',
                {expiresIn: '1h'}
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
    }
    else {
        res.json({
            status: "failure",
            error: "All fields are required"
        })
    }

}
const database= require('../utils/database');

module.exports= class user {
    constructor(id, name, email, password, lastLogin, createdFrom, phoneNumber, createdAt, salt) {
        this.id = id;
        this.name= name;
        this.email= email;
        this.password= password;
        this.salt = salt;
        this.lastLogin = lastLogin;
        this.createdFrom = createdFrom;
        this.createdAt = createdAt;
        this.phoneNumber = phoneNumber;
        console.log("User created!")
    }

    createUser() {
        return database.execute(`CALL SIGNUP("${this.id}", "${this.name}", "${this.email}", "${this.password}", "${this.salt}", "${this.lastLogin}", "${this.createdFrom}", "${this.phoneNumber}", "${this.createdAt}" )`);

    }

    static emailExistence(email) {
        return database.execute(`CALL EMAIL_EXISTENCE("${email}")`);
    }

    static loginUser(email) {
        return database.execute(`CALL LOGIN("${email}")`);
    }

    static updateLastLogin(id, lastLogin) {
        return database.execute(`CALL UPDATE_LASTLOGIN("${id}",
        "${lastLogin}")`);
    }

    static setAvailability( mondayTo,mondayFrom ,tuesdayTo,tuesdayFrom , wednesdayTo,
        wednesdayFrom , thursdayTo , thursdayFrom ,fridayTo ,  fridayFrom , 
        saturdayTo ,saturdayFrom ,  sundayTo ,  sundayFrom ,accountId) {
            return database.execute(`CALL SET_AVAILABILITY("${mondayTo}","${mondayFrom}","${tuesdayTo}",
            "${tuesdayFrom}","${wednesdayTo}","${wednesdayFrom}","${thursdayTo}","${thursdayFrom}",
            "${fridayTo}","${fridayFrom}","${saturdayTo}","${saturdayFrom}","${sundayTo}",
            "${sundayFrom}","${accountId}")`);
        }
}
const database= require('../utils/database');

module.exports = class user {
    constructor(id, name, email, password, salt, lastLogin, createdFrom, phoneNumber,createdAt,
        calendarId , todoListId 
        ) {
        this.id = id;
        this.name= name;
        this.email= email;
        this.password= password;
        this.salt = salt;
        this.lastLogin = lastLogin;
        this.createdFrom = createdFrom;
        this.phoneNumber = phoneNumber;
        this.createdAt = createdAt;
        this.calendarId = calendarId;
        this.todoListId = todoListId;
        console.log("User created!")
    }

    createUser() {
        return database.execute(`CALL FULL_SIGNUP("${this.id}", "${this.name}", "${this.email}", "${this.password}",
         "${this.salt}", "${this.lastLogin}", "${this.createdFrom}","${this.phoneNumber}",
         "${this.createdAt}", "${this.calendarId}" , "${this.todoListId}" )`);

    }

    // createUser() {
    //  return database.execute(`CALL SIGNINGUP("${this.id}","${this.name}","${this.email}","${this.password}",
    //  "${this.salt}","${this.lastLogin}","${this.createdFrom}","${this.phoneNumber}","${this.createdAt}",
    //   "${this.calendarId}" , "${this.todoListId}")`);

    // }

    static emailExistence(email) {
        return database.execute(`CALL EMAIL_EXISTENCE("${email}")`);
    }

    // static loginUser(email) {
    //     return database.execute(`CALL LOGIN("${email}")`);
    // }

    // static updateLastLogin(id, lastLogin) {
    //     return database.execute(`CALL UPDATE_LASTLOGIN("${id}",
    //     "${lastLogin}")`);
    // }

    // static setAvailability( mondayFrom,mondayTo ,tuesdayFrom,tuesdayTo , wednesdayFrom,
    //     wednesdayTo , thursdayFrom , thursdayTo ,fridayFrom ,  fridayTo , 
    //     saturdayFrom ,saturdayTo ,  sundayFrom ,  sundayTo ,accountId) {
    //         return database.execute(`CALL SET_AVAILABILITY("${mondayFrom}","${mondayTo}","${tuesdayFrom}",
    //         "${tuesdayTo}","${wednesdayFrom}","${wednesdayTo}","${thursdayFrom}","${thursdayTo}",
    //         "${fridayFrom}","${fridayTo}","${saturdayFrom}","${saturdayTo}","${sundayFrom}",
    //         "${sundayTo}","${accountId}")`);
    //     }

    
    static updateSetAvailability(mondayFrom,mondayTo ,tuesdayFrom,tuesdayTo , wednesdayFrom,
        wednesdayTo , thursdayFrom , thursdayTo ,fridayFrom ,  fridayTo , 
        saturdayFrom ,saturdayTo ,  sundayFrom ,  sundayTo ,accountId){
            return database.execute(`CALL UPDATE_SETAVAILABILITY("${mondayFrom}","${mondayTo}","${tuesdayFrom}",
            "${tuesdayTo}","${wednesdayFrom}","${wednesdayTo}","${thursdayFrom}","${thursdayTo}",
            "${fridayFrom}","${fridayTo}","${saturdayFrom}","${saturdayTo}","${sundayFrom}",
            "${sundayTo}","${accountId}")`);
        }

     static updateSignUp(id , name , image , email){
         return database.execute(`CALL UPDATE_USER("${id}","${name}","${image}","${email}")`)
     } 
}
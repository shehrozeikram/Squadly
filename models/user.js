const database= require('../utils/database');

module.exports= class user {
    constructor(id, userName, email, password, available) {
        this.id = id;
        this.userName= userName;
        this.email= email;
        this.password= password;
        this.available= available;
    }

    createUser() {
        return database.execute(`CALL SIGNUP("${this.id}", 
        "${this.userName}", "${this.email}", "${this.password}", 
        "${this.available}" )`);
    }
}
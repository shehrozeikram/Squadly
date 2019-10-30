const database= require('../utils/database');

module.exports= class calendar {
   constructor(id, name, accountId, colorId, createdAt) {
       this.id= id;
       this.name = name;
       this.accountId = accountId;
       this.colorId= colorId;
       this.createdAt = createdAt;
   }
   createCalendar() {
       return database.execute(`CALL CREATE_CALENDAR("${this.id}",
       "${this.name}", "${this.accountId}", "${this.colorId}", 
       "${this.createdAt}" )`);
   }
   
   static updateCalendar(id, name, colorId) {
    return database.execute(`CALL UPDATE_CALENDAR("${id}",
    "${name}","${colorId}")`);
   }
}
const database= require('../utils/database');

module.exports = class events{
    constructor(id,calendarID,titile,location,salt,endDate,allDay,notes,recurring,recurringDate){
        this.id = id,
        this.calendarID = calendarID,
        this.titile = titile,
        this.location = location,
        this.salt = salt,
        this.endDate = endDate,
        this.allDay = allDay,
        this.notes = notes,
        this.recurring = recurring,
        this.recurringDate = recurringDate

    }
    createEvents(){
        return database.execute(`CALL events("${this.id}","${this.calendarID}",
        "${this.titile}","${this.location}"
        ,"${this.salt}", "${this.endDate}", "${this.allDay}","${this.notes}","${this.recurring}", 
        "${this.recurringDate}" )`);
    }

   static updateEvents(id,calendarID,titile,location,salt,endDate,allDay,notes,recurring,recurringDate){
        return database.execute(`CALL updateEvents("${id}","${calendarID}",
        "${titile}","${location}","${salt}", "${endDate}", "${allDay}","${notes}","${recurring}", 
        "${recurringDate}" )`);
    }
}
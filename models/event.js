const database= require('../utils/database');
module.exports = class events{
   constructor(id,calendarId,title,location,startDate,endDate,allDay,notes,recurring){
       this.id = id,
       this.calendarId = calendarId,
       this.title = title,
       this.location = location,
       this.startDate = startDate,
       this.endDate = endDate,
       this.allDay = allDay,
       this.notes = notes,
       this.recurring = recurring
   }
   createEvents(){
       return database.execute(`CALL CREATE_EVENT("${this.id}","${this.calendarId}",
       "${this.title}","${this.location}", "${this.startDate}"
       , "${this.endDate}", "${this.allDay}","${this.notes}","${this.recurring}")`);
   }
  static updateEvents(id,calendarId,title,location,startDate,endDate,allDay,notes){
       return database.execute(`CALL UPDATE_EVENT("${id}","${calendarId}",
       "${title}","${location}", "${startDate}", "${endDate}", "${allDay}","${notes}")`);
   }

   static removeEvents(id){
       return database.execute(`CALL REMOVE_EVENT("${id}")`)
   }


}
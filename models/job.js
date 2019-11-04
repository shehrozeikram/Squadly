const database= require('../utils/database');

module.exports= class job {
    constructor(id, squadId, accountId, description, location, 
        date, startTime, endTime, createdAt, status, createdFrom) {

            this.id= id;
            this.squadId= squadId;
            this.accountId= accountId;
            this.description= description;
            this.location= location;
            this.date= date;
            this.startTime= startTime;
            this.endTime= endTime;
            this.createdAt= createdAt;
            this.status= status;
            this.createdFrom= createdFrom;
    }

    createJob() {
        return database.execute(`CALL CREATE_JOB("${this.id}",
        "${this.squadId}", "${this.accountId}", "${this.description}", 
        "${this.location}", "${this.date}", "${this.startTime}", 
        "${this.endTime}", "${this.createdAt}", "${this.status}", 
        "${this.createdFrom}")`);
    }

    static updateJob(id, description, location, date, startTime,
    endTime) {
        return database.execute(`CALL UPDATE_JOB("${id}",
        "${description}", "${location}", "${date}", "${startTime}",
        "${endTime}")`);
    }

    static rescheduleJob(id, date, startTime, endTime, reason,
    rescheduledId) {
        return database.execute(`CALL RESCHEDULE_JOB("${id}",
        "${date}", "${startTime}", "${endTime}", "${reason}", 
        "${rescheduledId}")`);
    }

    static updateJobStatus(id , status) {
        return database.execute(`CALL UPDATE_STATUS("${id}","${status}")`)
    }
}
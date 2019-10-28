const database= require('../utils/database');

module.exports= class user {
    constructor(jobId, description, status) {
        this.jobId = jobId;
        this.description = description;
        this.status = status;
    }

    createJobTask() {
        return database.execute(`CALL CREATE_JOBTASK("${this.jobId}",
        "${this.description}", "${this.status}")`);
    }

    static updateJobTask(id, jobId, description, status) {
        return database.execute(`CALL UPDATE_JOBTASK("${id}",
        "${jobId}", "${description}", "${status}")`);
    }
}
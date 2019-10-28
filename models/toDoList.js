const database= require('../utils/database');

module.exports= class toDoList {
    constructor(id, name, accountId, createdAt) {
        this.id = id;
        this.name = name;
        this.accountId = accountId;
        this.createdAt = createdAt;
    }

    createToDoList() {
        return database.execute(`CALL CREATE_TODOLIST("${this.id}",
        "${this.name}", "${this.accountId}", "${this.createdAt}")`);
    }

    static updateToDoList(id, name) {
        return database.execute(`CALL UPDATE_TODOLIST("${id}",
        "${name}")`);
    }
}
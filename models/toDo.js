const database= require('../utils/database');

module.exports= class toDo {
    constructor(id, listId, description, name, image, createdAt,
    dueDate) {
        this.id = id;
        this.listId = listId;
        this.description = description;
        this.name = name;
        this.image = image;
        this.createdAt = createdAt;
        this.dueDate = dueDate;
    }

    createToDo() {
        return database.execute(`CALL CREATE_TODO("${this.id}",
        "${this.listId}", "${this.description}", "${this.name}", 
        "${this.image}", "${this.createdAt}", "${this.dueDate}")`);
    }

    static updateToDo(id, description, name, image, dueDate) {
        return database.execute(`CALL UPDATE_TODO("${id}",
        "${description}", "${name}", "${image}", "${dueDate}")`);
    }

    static removeTODO(id ){
        return database.execute(`CALL REMOVE_TODO("${id}")`);
    }
}
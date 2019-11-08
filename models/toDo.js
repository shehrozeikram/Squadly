const database= require('../utils/database');

module.exports= class toDo {
    constructor(id, listId, description, name, image, createdAt,
    dueDate) {
        this.id = id;
        this.listId = listId;
        this.description = description;
        this.name = name;
        // this.image = image;
        this.createdAt = createdAt;
        this.dueDate = dueDate;
    }

    createToDo() {
        return database.execute(`CALL CREATE_TODO("${this.id}",
        "${this.listId}", "${this.description}", "${this.name}", 
         "${this.createdAt}", "${this.dueDate}")`);
    }

    static updateToDo(id, description, image, dueDate) {
        return database.execute(`CALL UPDATE_TODO("${id}",
        "${description}", "${image}", "${dueDate}")`);
    }

    static removeTODO(id ){
        return database.execute(`CALL REMOVE_TODO("${id}")`);
    }

    static removeMultipleTodo(ids){
        return database.execute(`CALL REMOVE_TODO("${ids}")`)
        }

}
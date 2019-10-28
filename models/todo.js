const database= require('../utils/database');

module.exports= class todo {
    constructor(id ,name,description,image,createdAt,dueDate) {
        this.id = id;
        this.name= name;
        this.description= description;
        this.image= image;
        this.createdAt = createdAt;
        this.dueDate = dueDate;
    }

    createTodo() {
        return database.execute(`CALL todo("${this.id}", 
        "${this.name}","${this.description}","${this.image}","${this.createdAt}","${this.dueDate}" )`);
    }

    static updateCurrentColor( name , color) {
        return database.execute(`CALL updateColor("${name}",
        "${color} ")`);
    }
}
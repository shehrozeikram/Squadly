const database= require('../utils/database');

module.exports= class service {
    constructor(name, available) {
        this.name = name;
        this.available = available;
    }

    createService() {
        return database.execute(`CALL CREATE_SERVICE("${this.name}",
        "${this.available}")`);
    }
    static updateService(previousName, newName) {
        return database.execute(`CALL UPDATE_SERVICE("${previousName}",
         "${newName}")`);
    }
}
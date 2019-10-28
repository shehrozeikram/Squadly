const database= require('../utils/database');

module.exports= class service {
    constructor(name, available) {
        this.name= name;
        this.available= available;
    }

    createService() {
        return database.execute(`CALL service( 
        "${this.name}",
        "${this.available}"
         )`);
    }

    static updateCurrentService( name,available) {
        return database.execute(`CALL serviceupdate(
        "${name}","${available}")`);
    }
}
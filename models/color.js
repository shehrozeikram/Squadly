const database= require('../utils/database');

module.exports= class color {
   constructor(name, color) {
       this.name = name;
       this.color= color;
   }
   createColor() {
       return database.execute(`CALL CREATE_COLOR("${this.name}",
       "${this.color}" )`);
   }
   static updateCurrentColor( name , color) {
       return database.execute(`CALL UPDATE_COLOR("${name}",
       "${color} ")`);
   }
}
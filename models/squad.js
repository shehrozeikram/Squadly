const database= require('../utils/database');

module.exports= class Squad {
    constructor(id, name, location, contact, image, team,
        bid, available, createdAt, createdFrom) {
        this.id = id;
        this.contact= contact;
        this.name= name;
        this.location= location;
        this.image= image;
        this.team= team;
        this.bid= bid;
        this.createdAt= createdAt;
        this.available= available;
        this.createdFrom= createdFrom;
    }
}
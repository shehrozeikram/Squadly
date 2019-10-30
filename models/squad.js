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

    createSquad() {
        return database.execute(`CALL CREATE_SQUAD("${this.id}",
        "${this.name}", "${this.location}", "${this.contact}", 
        "${this.image}","${this.team}", "${this.bid}", 
        "${this.available}","${this.createdAt}", "${this.createdFrom}")`)
    }

    static updateCurrentSquad(id, name, location, contact, image) {
        return database.execute(`CALL UPDATE_SQUAD("${id}", "${name}",
        "${location}", "${contact}", "${image}")`);
    }

    static addSquadMember(squadId, accountId, scheduler) {
        return database.execute(`CALL ADD_SQUAD_MEMBER("${squadId}",
        "${accountId}", "${scheduler}")`);
    }

    static removeSquadMember(squadId, accountId) {
        return database.execute(`CALL REMOVE_SQUAD_MEMBER("${squadId}",
        "${accountId}")`);
    }
}
const database= require('../utils/database');

module.exports= class business {
    constructor(id, contact, name, image, available, accountId, service,
        createdFrom) {
        this.id = id;
        this.contact= contact;
        this.name= name;
        this.image= image;
        this.accountId= accountId;
        this.available= available;
        this.service= service;
        this.createdFrom= createdFrom;
    }

    createBusiness() {
        return database.execute(`CALL CREATE_BUSINESS("${this.id}", 
        "${this.name}", "${this.contact}", "${this.image}",
        "${this.available}", "${this.accountId}",
        "${this.service}", "${this.createdFrom}" )`);
    }

    static updateCurrentBusiness(id, contact, name, image, service) {
        return database.execute(`CALL UPDATE_BUSINESS("${id}",
        "${contact}", "${name}", "${image}", "${service}")`);
    }

    static addBusinessEmployee(bid, accountId, status) {
        return database.execute(`CALL ADD_BUSINESS_EMPLOYEE("${bid}",
        "${accountId}", "${status}")`);
    }

    static removeBusinessEmployee(bid, accountId) {
        return database.execute(`CALL REMOVE_BUSINESS_EMPLOYEE("${bid}",
        "${accountId}")`);
    }
}
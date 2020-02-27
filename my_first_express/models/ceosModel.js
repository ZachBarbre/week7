const db = require('./conn');

class ExecutiveList {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM ceos;`);
            return response;
        } catch (err) {
            console.error('error: ', err)
            return error;
        }

    }

    static async getCEO(id) {
        try{
            const response = await db.any(`SELECT * FROM ceos where id = ${id}`);
            return response;
        } catch (err) {
            console.error('error: ', err);
            return error;
        }
    }
}

module.exports = ExecutiveList;
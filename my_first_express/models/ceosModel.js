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
        } catch (error) {
            console.error('error: ', error)
            return error;
        }

    }
}

module.exports = ExecutiveList;
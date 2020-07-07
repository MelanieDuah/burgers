const connector = require("../config/connection");

class ORM {

    constructor() {
    }

    async initialize() {
        try {

            this.connection = await connector.connect();
        } catch (error) {
            console.error(`Couldn't connect to the database \n ${error}`);
        }
    }

    selectAll(table_name) {
        return new Promise(async (resolve, reject) => {
            if (!this.connection)
                await this.initialize();

            let query = `SELECT * from ${table_name}`;
            try {

                const [results] = await this.connection.query(query);

                resolve(results);
            } catch (error) {

                reject(error);
            }

        });
    }

    insertOne(table_name, columns, values) {
        return new Promise(async (resolve, reject) => {

            if (!this.connection)
                await this.initialize();

            let query = `INSERT INTO ${table_name} (${columns}) VALUES (${values})`;

            try {
                await this.connection.query(query);
                resolve();
            } catch (error) {

                reject(error);
            }

        });
    }


    updateOne(table_name, columns, condition) {
        return new Promise(async (resolve, reject) => {

            if (!this.connection)
                await this.initialize();
                
            let query = `UPDATE ${table_name} SET ${columns} WHERE ${condition}`;

            try {
                await this.connection.query(query);
                resolve();
            } catch (error) {

                reject(error);
            }

        });
    }
}



module.exports = ORM;
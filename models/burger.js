const ORM = require("../config/orm.js");


class Burger {

    constructor() {
        this.orm = new ORM();
    }

    getAll() {
        return this.orm.selectAll("burgers");
    }

    create(burger_name, devoured) {

        let table_name = 'burgers';
        let columns = ['burger_name', 'devoured'];
        let values = [`'${burger_name}'`, devoured];
        return this.orm.insertOne(table_name, columns, values);
    }
    
    update(id, devoured){
        let table_name='burgers';
        let columns=`devoured='${devoured ? 1 : 0}'`;
        let condition=`id=${id}`;
        return this.orm.updateOne(table_name,columns,condition);
    }
}

module.exports = Burger;

const Burger = require('../models/burger');

class BurgerController {

    constructor(app) {
        this.app = app;
        this.burger = new Burger();
    }

    createBurger(request, response) {
        let burgerName = request.body.burgername;
        this.burger.create(burgerName, false);
        this.getAllBurgers(request, response);
    }

    async getAllBurgers(request, response) {
        let results = await this.burger.getAll();

        let burgersObject = {
            burgers: results
        }
        response.render('index', burgersObject);
    }

    async updateBurger(request, response) {
        let burgerId = request.body.id;
        await this.burger.update(burgerId, true);
        await this.getAllBurgers(request, response);
    }

    createRoutes() {

        this.app.post('/create', (request, response) => this.createBurger(request, response));
        this.app.get('/', (request, response) => this.getAllBurgers(request, response));
        this.app.post('/update', (request, response) => this.updateBurger(request, response));
    }
}


module.exports = BurgerController;
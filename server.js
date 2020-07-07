const express = require("express");
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const handlebars = require("express-handlebars");

app.engine(".hbs", handlebars(
  {
    defaultLayout: "main",
    extname: ".hbs",
    layoutsDir: path.join(__dirname, '/views/layouts/'),
    partialsDir: path.join(__dirname + '/views/partials/')
  }));

app.set("view engine", ".hbs");

const BurgerController = require("./controllers/burgers_controller");

new BurgerController(app).createRoutes();

app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});

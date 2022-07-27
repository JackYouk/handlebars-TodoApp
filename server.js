const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const routes = require('./controllers/homepageController');

const helpers = require('./utils/helpers');

const hbs = exphbs.create({
    helpers,
});

const app = express();

const PORT = process.env.PORT || 3001;

// handlebars template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middlewares
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log('server up'));
});


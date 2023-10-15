const { Router } = require('express');
const rootRoutes = require('./index.js');

const AppRoute = (app) => {
    app.use('/', rootRoutes);
}
module.exports =  AppRoute;
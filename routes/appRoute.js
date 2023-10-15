import { Router } from 'express';
import rootRoutes from '../index.js'

const AppRoute = (app) => {
    app.use('/', rootRoutes);
}
export default AppRoute;
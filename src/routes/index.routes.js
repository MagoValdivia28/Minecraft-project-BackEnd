import { Router } from 'express';
import equipamentosRoutes from './equipamentos.routes.js';
import encamentosRoutes from './encantamentos.routes.js';

const routes = Router();

routes.use('/equipamentos', equipamentosRoutes);
routes.use('/encantamentos', encamentosRoutes);

routes.get('/', (req, res) => {
    return res.status(200).send({message: 'Server on dmss🚗'});
});

export default routes;
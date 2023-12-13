import { Router } from 'express';
import equipamentosRoutes from './equipamentos.routes.js';
import encamentosRoutes from './encantamentos.routes.js';
import rotasFeedback from  "./feedback.routes.js"

import membrosRoutes from './membros.routes.js';
import mobsRoutes from './mobs.routes.js';


const routes = Router();

routes.use('/equipamentos', equipamentosRoutes);
routes.use('/feedback', rotasFeedback);
routes.use('/encantamentos', encamentosRoutes);
routes.use('/membros', membrosRoutes);
routes.use('/mobs', mobsRoutes);

routes.get('/', (req, res) => {
    return res.status(200).send({message: 'Server on dmss🚗'});
});

export default routes;
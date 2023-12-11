import { Router } from 'express';
import equipamentosRoutes from './equipamentos.routes.js';
import encamentosRoutes from './encantamentos.routes.js';
import rotasFeedback from  "./feedback.routes.js"

const routes = Router();

routes.use('/equipamentos', equipamentosRoutes);
routes.use('/feedback', rotasFeedback);

routes.get('/', (req, res) => {
    return res.status(200).send({message: 'Server on dmss🚗'});
});

export default routes;
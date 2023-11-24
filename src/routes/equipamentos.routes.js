import { Router } from 'express';
import {
    getAllEquipamentos,
    getEquipamentoById,
    createEquipamento,
    deleteEquipamento,
    updateEquipamento,
} from "../controllers/equipamentos.controller.js";

const equipamentosRoutes = Router();

equipamentosRoutes.get("/", getAllEquipamentos);    
equipamentosRoutes.get("/:id", getEquipamentoById);
equipamentosRoutes.post("/", createEquipamento);
equipamentosRoutes.delete("/:id", deleteEquipamento);
equipamentosRoutes.put("/:id", updateEquipamento);

export default equipamentosRoutes;
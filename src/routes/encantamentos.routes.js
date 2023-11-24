import { Router } from "express";
import {
    getAllEncantamentos,
    getEncantamentoById,
    createEncantamento,
    deleteEncantamento,
    updateEncantamento
} from "../controllers/encantamentos.controller.js";

const encantamentosRoutes = Router();

encantamentosRoutes.get("/", getAllEncantamentos);
encantamentosRoutes.get("/:id", getEncantamentoById);
encantamentosRoutes.post("/", createEncantamento);
encantamentosRoutes.delete("/:id", deleteEncantamento);
encantamentosRoutes.put("/:id", updateEncantamento);

export default encantamentosRoutes;
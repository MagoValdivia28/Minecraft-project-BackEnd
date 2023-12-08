import { Router } from "express";
import { 
    getAllMembros,
    getMembroById,
    createMembro,
    deleteMembro,
    updateMembro
} from "../controllers/membros.controller.js";

const membrosRoutes = Router();

membrosRoutes.get("/", getAllMembros);
membrosRoutes.get("/:id", getMembroById);
membrosRoutes.post("/", createMembro);
membrosRoutes.delete("/:id", deleteMembro);
membrosRoutes.put("/:id", updateMembro);

export default membrosRoutes;
import { Router } from "express";
import {
    getAllMobs,
    getMobById,
    createMob,
    deleteMob,
    updateMob
} from "../controllers/mobs.controller.js";

const mobsRoutes = Router();

mobsRoutes.get("/", getAllMobs);
mobsRoutes.get("/:id", getMobById);
mobsRoutes.post("/", createMob);
mobsRoutes.delete("/:id", deleteMob);
mobsRoutes.put("/:id", updateMob);

export default  mobsRoutes;
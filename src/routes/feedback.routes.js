import { 
    deleteFeedback,
    atualizarFeedback,
    criarFeedbacks,
    getAllFeedbacks,
    getFeedbackById,
 } from "../controllers/feedback.controller.js";

import { Router } from "express";

const rotasFeedback = Router();

rotasFeedback.get("/", getAllFeedbacks);
rotasFeedback.get("/:id", getFeedbackById);
rotasFeedback.post("/", criarFeedbacks);
rotasFeedback.put("/:id", atualizarFeedback);
rotasFeedback.delete("/:id", deleteFeedback);

export default rotasFeedback;
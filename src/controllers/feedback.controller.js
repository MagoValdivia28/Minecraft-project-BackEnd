
import { FeedbackList } from "../models/feedback/feedbackList.js";
import  comentarios from "../data/feedback.js"
import { FeedbackModel } from "../models/feedback/feedback.js";


const listaFeedbacks = new FeedbackList();
comentarios.map(comentario => {

  const feedbackModel= new FeedbackModel(comentario.nome, comentario.email, comentario.mensagem);

listaFeedbacks.criarFeedback(feedbackModel);
 listaFeedbacks.todosFeedback()
});

export const getAllFeedbacks = (req, res) => {
    const feedbacks = listaFeedbacks.todosFeedback();
    return res.status(200).send({ feedbacks });
}
export const getFeedbackById = (req, res) => {
 const { id } = req.params;
 const feedback = listaFeedbacks.atualizarFeedback(id);
 if (feedback) {
    return res.status(200).send({ feedback });
 } else {
    return res.status(200).send({ message: "Feedback não encontrado" });
 }
}
export const criarFeedbacks = (req, res) => {
    const { nome, email, mensagem } = req.body;
 const feedback = new FeedbackModel(nome, email, mensagem);
 if(!nome || !email || !mensagem) {
    return res.status(400).send({ message: "Preencha todos os campos" });
 }else{
    listaFeedbacks.criarFeedback(feedback);
    return res.status(201).send({ message: "Feedback criado com sucesso" });
 }
}
export const atualizarFeedback = (req, res) => {
const { id } = req.params;
const { nome, email, mensagem } = req.body;
const feedback = new comentarios(nome, email, mensagem);
const feed = listaFeedbacks.atualizarFeedback(feedback,id);
if (!feedback) {
    return res.status(200).send({ message: `Feedback ${feed} atualizado com sucesso` });
} else {
    return res.status(200).send({ message: "Feedback não encontrado" });
}
}

export const deleteFeedback = (req, res) => {
    const { id } = req.params;
    const feedback = listaFeedbacks.getEquipamento(id);

    if (!feedback) {
        return res.status(404).send({ message: "Equipamento não encontrado" });
    }

    listaFeedbacks.removerFeedback(id);

    return res.status(200).send({ message: "Equipamento deletado com sucesso" });
}


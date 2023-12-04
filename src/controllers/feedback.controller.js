import  Feedback  from "../models/feedback/Feedback.js";
import { feedbackList } from "../models/feedback/feedbackList.js";


const listaFeedbacks = new feedbackList();


listaFeedbacks.map(comentarios => {
    const comentarios = comentarios;
listaFeedbacks.criarFeedback(comentarios);
listaFeedbacks.todosFeedback();
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
 const feedback = new Feedback(nome, email, mensagem);
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
const feedback = new Feedback(nome, email, mensagem);
const feed = listaFeedbacks.atualizarFeedback(feedback,id);
if (!feedback) {
    return res.status(200).send({ message: `Feedback ${feed} atualizado com sucesso` });
} else {
    return res.status(200).send({ message: "Feedback não encontrado" });
}
}

export const deletarFeedback = (req, res) => {
    const { id } = req.params;
    const feedback = listaFeedbacks.removerFeedback(id);
    if (feedback) {
        return res.status(200).send({ message: "Feedback deletado com sucesso" });
    } else {
        return res.status(200).send({ message: "Feedback não encontrado" });
}
}
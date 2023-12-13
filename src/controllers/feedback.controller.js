
import { FeedbackList } from "../models/feedback/feedbackList.js";
import comentarios from "../data/feedback.js"
import { FeedbackModel } from "../models/feedback/feedback.js";

//Cria uma instância nova de FeedbackList
const listaFeedbacks = new FeedbackList();
//Mapeia cada comentário do array de comentários e cria uma instância de FeedbackModel e adiciona ao array de feedbacks
comentarios.map(comentario => {

    const feedbackModel = new FeedbackModel(comentario.nome, comentario.email, comentario.mensagem);

    //Adiciona o feedback ao array de feedbacks
    listaFeedbacks.criarFeedback(feedbackModel);
    listaFeedbacks.todosFeedback()
});

//Rotas
export const getAllFeedbacks = (req, res) => {
    //Retorna todos os feedbacks
    const feedbacks = listaFeedbacks.todosFeedback();
    //Retorna os feedbacks
    return res.status(200).send({ feedbacks });
}
//Busca um feedback pelo id
export const getFeedbackById = (req, res) => {
    //Retorna um feedback pelo id
    const { id } = req.params;
    //Retorna o feedback
    const feedback = listaFeedbacks.getFeedback(id);
    //Retorna o feedback
    if (feedback) {
        return res.status(200).send({ feedback });
    //Retorna uma mensagem de feedback não encontrado
    } else {
        return res.status(200).send({ message: "Feedback não encontrado" });
    }
}
//Cria um novo feedback
export const criarFeedbacks = (req, res) => {
    //Recebe os dados do body
    const { nome, email, mensagem } = req.body;
    //Cria um novo feedback
    const feedback = new FeedbackModel(nome, email, mensagem);
    //Verifica se todos os campos foram preenchidos
    if (!nome || !email || !mensagem) {
        return res.status(400).send({ message: "Preencha todos os campos" });
    } else {
        listaFeedbacks.criarFeedback(feedback);
        return res.status(201).send({ message: "Feedback criado com sucesso" });
    }
}

export const atualizarFeedback = (req, res) => {
    const { id } = req.params;
    const { nome, email, mensagem } = req.body;
    const feedback = listaFeedbacks.getFeedback(id);
    if (!feedback) {
        return res.status(200).send({ message: "Feedback não encontrado" });
    } else {
        const feedbackAtualizado = listaFeedbacks.atualizarFeedback(id, nome, email, mensagem);
        return res.status(200).send({ feedbackAtualizado });
    }
}

export const deleteFeedback = (req, res) => {
    const { id } = req.params;
    const feedback = listaFeedbacks.getFeedback(id);

    console.log(feedback);
    if (!feedback) {
        console.log("passou aqui")
        return res.status(404).send({ message: "Equipamento não encontrado" });
    }

    listaFeedbacks.removerFeedback(id);

    return res.status(200).send({ message: "Equipamento deletado com sucesso" });
}


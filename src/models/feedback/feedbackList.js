export class FeedbackList {
    constructor() {
        this.listFeedback = [];
    }
    todosFeedback(){
       return this.listFeedback
    }

    criarFeedback(feedback) {
        this.listFeedback.push(feedback);
    }
    removerFeedback(id) {
        this.listFeedback = this.listFeedback.filter(feedback => feedback.id !== id);
    }

    atualizarFeedback(id, nome, email, mensagem) {
        this.listFeedback = this.listFeedback.map(feedback => {
            if (feedback.id == id) {
                feedback.nome = nome;
                feedback.email = email;
                feedback.mensagem = mensagem;
            }
            return feedback;
        });

        return this.getFeedback(id);
    }

    getFeedback(id) {
        return this.listFeedback.find(feedback => feedback.id == id);
    }

}
export class feedbackList {
    constructor() {
        this.listFeedback = [];
    }
    todosFeedback(){
       return this.listFeedback
    }

    criarFeedback(feedback) {
        this.listFeedback.push(feedback);
    }

    atualizarFeedback(id) {
        const feedback = this.listFeedback.find((feedback) => feedback.id === id);
        return feedback;
    }
    removerFeedback(id) {
        const feedback = this.listFeedback.find((feedback) => feedback.id === id) || this.atualizarFeedback(id);
        const index = this.listFeedback.indexOf(feedback);
        this.listFeedback.splice(index, 1);
    }
}
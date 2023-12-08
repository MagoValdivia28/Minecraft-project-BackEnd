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

    atualizarFeedback(id) {
        const feedback = this.listFeedback.find((feedback) => feedback.id === id);
        return feedback;
    }
    removerFeedback(id) {
        this.listFeedback = this.listFeedback.filter(feedback => feedback.id !== id);
    }

    getFeedback(id) {
        return this.feedbacks.find(feedback => feedback.id == id);
    }

}
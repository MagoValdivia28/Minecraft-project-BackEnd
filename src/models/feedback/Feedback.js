import { v4 as uuidv4 } from 'uuid';

 export class FeedbackModel {
    constructor(nome, email, mensagem) {
        this.nome = nome;
        this.email = email;
        this.mensagem = mensagem;
        this.id = uuidv4();
    }
}

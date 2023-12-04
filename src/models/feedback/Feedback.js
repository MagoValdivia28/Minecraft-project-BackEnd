import { v4 as uuidv4 } from 'uuid';
export default class Feedback{
constructor(nome, email, mensagem){
    this.nome = nome;
    this.email = email;
    this.mensagem = mensagem;
    this.id = uuidv4();
}
}

import { v4 as uuidv4 } from 'uuid';

export class Membro {
    constructor(nome, idade, descricao, urlimagem, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.descricao = descricao;
        this.urlimagem = urlimagem;
        this.cargo = cargo;
        this.id = uuidv4();
    }
}
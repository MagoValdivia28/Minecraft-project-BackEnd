import { v4 as uuidv4 } from 'uuid';

export class Membro {
    constructor(nome, idade, descricao, cargo, urlimagem ) {
        this.nome = nome;
        this.idade = idade;
        this.descricao = descricao;
        this.cargo = cargo;
        this.urlimagem = urlimagem;
        this.id = uuidv4();
    }
}
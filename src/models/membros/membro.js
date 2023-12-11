import { v4 as uuidv4 } from 'uuid';

export class Membro {
    constructor(nome, idade, descricao, urlimagem, cargo, backgroundcor) {
        this.nome = nome;
        this.idade = idade;
        this.descricao = descricao;
        this.urlimagem = urlimagem;
        this.cargo = cargo;
        this.backgroundcor = backgroundcor;
        this.id = uuidv4();
    }
}
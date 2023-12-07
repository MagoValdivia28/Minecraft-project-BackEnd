import { v4 as uuidv4 } from 'uuid';

export class Membro {
    constructor(nome, idade, descricao) {
        this.nome = nome;
        this.idade = idade;
        this.descricao = descricao;
        this.id = uuidv4();
    }
}
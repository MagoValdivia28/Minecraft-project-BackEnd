import { v4 as uuidv4 } from 'uuid';

export class Mob {
    constructor(nome, descricao, tipo, dano, defesa, img) {
        this.nome = nome
        this.descricao = descricao;
        this.tipo = tipo;
        this.dano = dano;
        this.defesa = defesa;
        this.img = img;
        this.id = uuidv4();
    }
}
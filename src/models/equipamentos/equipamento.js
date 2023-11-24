import { v4 as uuidv4 } from 'uuid';

export class Equipamento {
    constructor(nome, descricao, material, tipo, dano, defesa, cor) {
        this.nome = nome;
        this.descricao = descricao;
        this.material = material;
        // o tipo é o que vai definir se é uma armadura ou uma arma por exemplo: espada, capacete, peitoral e etc   
        this.tipo = tipo;
        this.dano = dano;
        this.defesa = defesa;
        this.cor = cor
        this.id = uuidv4();
    }
}
import { v4 as uuidv4 } from 'uuid';

export class Encantamento {
    constructor(titulo, descricao, tipoEncanto, dano, defesa, nivel) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tipoEncanto = tipoEncanto;
        this.dano = dano;
        this.defesa = defesa;
        this.nivel = nivel;
        this.forcaEncantamento = this.getForcaEncantamento(nivel);
        this.id = uuidv4();
    }

    getForcaEncantamento(nivel) {
        if(nivel < 10) {
            return 1;
        } else if (nivel >= 10 && nivel < 20) {
            return 2;
        } else if (nivel >= 20 && nivel <= 30) {
            return 3;
        } else {
            return 'invalido';
        }
    }
}
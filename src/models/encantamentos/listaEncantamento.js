export class ListaEncantamentos {
    constructor() {
        this.encantamentos = [];
    }

    addEncantamento(encantamento) {
        this.encantamentos.push(encantamento);
    }

    removeEncantamento(id) {
        this.encantamentos = this.encantamentos.filter(encantamento => encantamento.id !== id);
    }

    updateEncantamento(id, titulo, descricao, tipoEncanto, dano, defesa, cor) {
        this.encantamentos = this.encantamentos.map(encantamento => {
            if (encantamento.id === id) {
                encantamento.titulo = titulo;
                encantamento.descricao = descricao;
                encantamento.tipoEncanto = tipoEncanto;
                encantamento.dano = dano;
                encantamento.defesa = defesa;
            }
            return encantamento;
        });
        return this.getEncantamento(id);
    }

    getEncantamento(id) {
        return this.encantamentos.find(encantamento => encantamento.id == id);
    }

    getAllEncantamentos() {
        return this.encantamentos;
    }
    
}
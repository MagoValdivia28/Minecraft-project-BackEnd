export class ListaEquipamentos {
    constructor() {
        this.equipamentos = [];
    }

    addEquipamento(equipamento) {
        this.equipamentos.push(equipamento);
    }

    removeEquipamento(id) {
        this.equipamentos = this.equipamentos.filter(equipamento => equipamento.id !== id);
    }

    updateEquipamento(id, nome, descricao, material, tipo, dano, defesa, cor) {
        this.equipamentos = this.equipamentos.map(equipamento => {
            if (equipamento.id === id) {
                equipamento.nome = nome;
                equipamento.descricao = descricao;
                equipamento.material = material;
                equipamento.tipo = tipo;
                equipamento.dano = dano;
                equipamento.defesa = defesa;
                equipamento.cor = cor;
            }
            return equipamento;
        });
        return this.getEquipamento(id);
    }

    getEquipamento(id) {
        return this.equipamentos.find(equipamento => equipamento.id == id);
    }

    getAllEquipamentos() {
        return this.equipamentos;
    }

    getFiltered (nome, tipo) {
        if (nome && tipo) {
            return this.equipamentos.filter(equipamento => equipamento.nome === nome && equipamento.tipo === tipo);
        } else if (nome) {
            return this.equipamentos.filter(equipamento => equipamento.nome === nome);
        } else if (tipo) {
            return this.equipamentos.filter(equipamento => equipamento.tipo === tipo);
        } else {
            return this.equipamentos;
        }
    }


    
}
export class ListaMembros {
    constructor() {
        this.membros = [];
    }

    addMembro(membro) {
        this.membros.push(membro);
    }

    removeMembro(id) {
        this.membros = this.membros.filter(membro => membro.id !== id);
    }

    updateMembro(id, nome, idade, descricao) {
        this.membros = this.membros.map(membro => {
            if (membro.id === id) {
                membro.nome = nome;
                membro.idade = idade;
                membro.descricao = descricao;
            }
            return membro;
        });
        return this.getMembro(id);
    }

    getMembro(id) {
        return this.membros.find(membro => membro.id == id);
    }

    getAllMembros() {
        return this.membros;
    }
    
}
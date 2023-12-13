export class ListaMobs {
    constructor() {
        this.mobs = [];
    }

    addMob(mob) {
        this.mobs.push(mob);
    }

    removeMob(id) {
        this.mobs = this.mobs.filter(mob => mob.id !== id);
    }

    updateMob(id, nome, descricao, tipo, dano, defesa, img) {
        this.mobs = this.mobs.map(mob => {
            if (mob.id === id) {
                mob.nome = nome;
                mob.descricao = descricao;
                mob.tipo = tipo;
                mob.dano = dano;
                mob.defesa = defesa;
                mob.img = img;
               
            }
            return mob;
        });
        return this.getMob(id);
    }

    getMob(id) {
        return this.mobs.find(mob => mob.id == id);
    }

    getAllMobs() {
        return this.mobs;
    }

    getFiltredType = (tipo) => {
        return this.mobs.filter(mob => mob.tipo == tipo);
    }
    
}
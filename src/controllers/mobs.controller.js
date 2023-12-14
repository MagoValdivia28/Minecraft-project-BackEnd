import { Mob } from '../models/mobs/mob.js';
import { ListaMobs } from '../models/mobs/listaMobs.js';
import { verificacoesMob } from '../components/Verifications.js';

// ENCANTAMENTOS

const listMobs = new ListaMobs();

// Buscar todos os encantamentos
export const getAllMobs = (req, res) => {
    const name = req.query.name;
    const type = req.query.type;
    const mobs = listMobs.getFiltered(name, type);
    return res.status(200).send({ mobs });
}

// Buscar encantamento por ID

export const getMobById = (req, res) => {
    const { id } = req.params;
    const mob = listMobs.getMob(id);
    if (mob) {
        return res.status(200).send({ mob });
    } else {
        return res.status(200).send({ message: "Mob não encontrado" });
    }
}

// Adicionar encantamento

export const createMob = (req, res) => {
    const errors = [];

    const { nome, descricao, tipo, dano, defesa, img } = req.body;

    // verificações

    verificacoesMob(nome , descricao, tipo ,dano, defesa, img, errors);

    if (errors.length > 0) {
        return res.status(400).send({ errors });
    } else {
        const mob = new Mob(nome ,descricao, tipo, dano, defesa, img);
        listMobs.addMob(mob);
        return res.status(201).send({ message: "Seu mob foi criado com sucesso" });
    }

}

// Deleta encantamento

export const deleteMob = (req, res) => {
    const { id } = req.params;
    const mob = listMobs.getMob(id);

    if (!mob) {
        return res.status(404).send({ message: "Mob não encontrado" });
    }

    listMobs.removeMob(id);

    return res.status(200).send({ message: "Mob deletado com sucesso" });
}

// Atualiza encantamento

export const updateMob = (req, res) => {
    const errors = [];

    const { id } = req.params;
    const { nome, descricao, tipo, dano, defesa, img } = req.body;

    if (!nome) {
        errors.push("Nome não informado");
    }
    if (!descricao) {
        errors.push("Descrição não informada");
    }
    if(!dano && !defesa) {
        errors.push("O valor do dano ou da defesa tem que ser informado");
    }
    if (isNaN(dano) || isNaN(defesa)) {
        errors.push("Dano e defesa devem ser um número");
    }
    if (dano > 20 || dano < 0) {
        errors.push("Dano deve ser entre 0 e 20");
    }
    if (defesa > 20 || defesa < 0) {
        errors.push("Defesa deve ser entre 0 e 20");
    }

    if (errors.length > 0) {
        return res.status(400).send({ errors });
    } else {
        const mob = listMobs.getMob(id);
        if (!mob) {
            return res.status(404).send({ message: "Mob não encontrado" });
        }
        const updateMob = listMobs.updateMob(id, nome, descricao, tipo, dano, defesa, img);
        return res.status(200).send({ message: "Mob atualizado com sucesso", updateMob });
    }
}


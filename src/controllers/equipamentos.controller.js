import { Equipamento } from '../models/equipamentos/equipamento.js';
import { ListaEquipamentos } from '../models/equipamentos/listaEquipamentos.js';
import { verificacoesEquipamento } from '../components/Verifications.js';
import equipamentosPredefinidos from '../data/equipamentos.js';

// EQUIPAMENTOS

const listEquipamentos = new ListaEquipamentos();

// equipamentos pre definifdos

equipamentosPredefinidos.map(equipamento => {
    const equipamentoModel = new Equipamento(equipamento.nome, equipamento.descricao, equipamento.material, equipamento.tipo, equipamento.dano, equipamento.defesa, equipamento.cor);
    listEquipamentos.addEquipamento(equipamentoModel);
    listEquipamentos.getAllEquipamentos();
}); 

// Buscar Todos os equipamentos
export const getAllEquipamentos = (req, res) => {
    const name = req.query.name;
    const type = req.query.type;
    const equipamentos = listEquipamentos.getFiltered(name, type);
    return res.status(200).send({ equipamentos });
}

// Buscar equipamento por ID

export const getEquipamentoById = (req, res) => {
    const { id } = req.params;
    const equipamento = listEquipamentos.getEquipamento(id);
    if (equipamento) {
        return res.status(200).send({ equipamento });
    } else {
        return res.status(200).send({ message: "Equipamento não encontrado" });
    }
}

// Adicionar equipamento

export const createEquipamento = (req, res) => {
    const errors = [];

    // Lower Case
    req.body.nome = req.body.nome.toLowerCase();
    req.body.descricao = req.body.descricao.toLowerCase();
    req.body.material = req.body.material.toLowerCase();
    req.body.tipo = req.body.tipo.toLowerCase();
    req.body.cor = req.body.cor.toLowerCase();
    const { nome, descricao, material, tipo, dano, defesa, cor } = req.body;

    // verificações
    verificacoesEquipamento(nome, descricao, material, tipo, dano, defesa, cor, errors);

    if (errors.length > 0) {
        return res.status(400).send({ errors });
    } else {
        const equipamento = new Equipamento(nome, descricao, material, tipo, dano, defesa, cor);
        listEquipamentos.addEquipamento(equipamento);
        return res.status(201).send({ message: "Equipamento criado com sucesso" });
    }

}

// Deleta equipamento 

export const deleteEquipamento = (req, res) => {
    const { id } = req.params;
    const equipamento = listEquipamentos.getEquipamento(id);

    if (!equipamento) {
        return res.status(404).send({ message: "Equipamento não encontrado" });
    }

    listEquipamentos.removeEquipamento(id);

    return res.status(200).send({ message: "Equipamento deletado com sucesso" });
}

// Atualiza equipamento

export const updateEquipamento = (req, res) => {
    const errors = [];

    const { id } = req.params;
    const { nome, descricao, material, tipo, dano, defesa, cor } = req.body;

    if (!nome) {
        errors.push("Nome não informado");
    }
    if (!descricao) {
        errors.push("Descrição não informada");
    }
    if (!material) {
        errors.push("Material não informado");
    }
    if (!tipo) {
        errors.push("Tipo não informado");
    }
    if (!dano && !defesa) {
        errors.push("O valor do dano ou da defesa tem que ser informado");
    }
    if (!cor) {
        errors.push("Cor não informada");
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
        const equipamento = listEquipamentos.getEquipamento(id);
        if (!equipamento) {
            return res.status(404).send({ message: "Equipamento não encontrado" });
        }
        const updateEquipamento = listEquipamentos.updateEquipamento(id, nome, descricao, material, tipo, dano, defesa, cor);
        return res.status(200).send({ message: "Equipamento atualizado com sucesso", updateEquipamento });
    }
}


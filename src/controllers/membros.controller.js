import { Membro } from '../models/membros/membro.js';
import { ListaMembros } from '../models/membros/listaMembros.js';
import { verificacoesMembro } from '../components/verifications.js';

// MEMBROS

const listMembros = new ListaMembros();

// Buscar todos os membros
export const getAllMembros = (req, res) => {
    const membros = listMembros.getAllMembros();
    if (membros.length > 0) {
        return res.status(200).send({ membros });
    } else {
        return res.status(200).send({ message: "Não há membros cadastrados" });
    }
}

// Buscar membro por ID
export const getMembroById = (req, res) => {
    const { id } = req.params;
    const membro = listMembros.getMembro(id);
    if (membro) {
        return res.status(200).send({ membro });
    } else {
        return res.status(200).send({ message: "Membro não encontrado" });
    }
}

// Adicionar membro
export const createMembro = (req, res) => {
    const errors = [];

    // Lower Case

    req.body.nome = req.body.nome.toLowerCase();
    req.body.descricao = req.body.descricao.toLowerCase();
    req.body.urlimagem = req.body.urlimagem.toLowerCase();
    req.body.cargo = req.body.cargo.toLowerCase();
    req.body.backgroundcor = req.body.backgroundcor.toLowerCase();


    const { nome, idade, descricao, urlimagem, cargo, backgroundcor } = req.body;

    // verificações

    verificacoesMembro(nome, idade, descricao, urlimagem, cargo, backgroundcor, errors);

    if (errors.length > 0) {
        return res.status(400).send({ errors });
    } else {
        const membro = new Membro(nome, idade, descricao, urlimagem, cargo, backgroundcor);
        listMembros.addMembro(membro);
        return res.status(201).send({ message: "Membro criado com sucesso" });
    }
}

// Deleta membro 

export const deleteMembro = (req, res) => {
    const { id } = req.params;
    const membro = listMembros.getMembro(id);

    if (!membro) {
        return res.status(404).send({ message: "Pessoa não encontrado" });
    }

    listMembros.removeMembro(id);

    return res.status(200).send({ message: "Membro de equipe deletado com sucesso" });
}

// Atualiza membro
export const updateMembro = (req, res) => {
    const errors = [];

    const { id } = req.params;
    const { nome, idade, descricao, urlimagem, cargo, backgroundcor } = req.body;

    if (!nome) {
        errors.push("Nome não informado");
    }
    if (!descricao) {
        errors.push("Descrição não informada");
    }
    if (!urlimagem) {
        errors.push("URL da imagem não informada");
    }
    if (!cargo) {
        errors.push("Cargo não informado");
    }
    if (!backgroundcor) {
        errors.push("backgroundcor não informada");
    }
    if (!idade) {
        errors.push("Idade não informada");
    }
    if (isNaN(idade)) {
        errors.push("Idade deve ser um número");
    }
    if (idade < 0) {
        errors.push("Idade deve ser maior que 0");
    }

    if (errors.length > 0) {
        return res.status(400).send({ errors });
    } else {
        const membro = listMembros.getMembro(id);
        if (!membro) {
            return res.status(404).send({ message: "Pessoa não encontrada" });
        }
        const updateMembro = listMembros.updateMembro(id, nome, idade, descricao, urlimagem, cargo, backgroundcor);
        return res.status(200).send({ message: "Membro atualizado com sucesso", updateMembro });
    }
}
import { Encantamento } from '../models/encantamentos/encantamento.js';
import { ListaEncantamentos } from '../models/encantamentos/listaEncantamento.js';
import { verificacoesEncantamento } from '../components/verifications.js';

// ENCANTAMENTOS

const listEncantamentos = new ListaEncantamentos();

// Buscar todos os encantamentos
export const getAllEncantamentos = (req, res) => {
    const encantamentos = listEncantamentos.getAllEncantamentos();
    if (encantamentos.length > 0) {
        return res.status(200).send({ encantamentos });
    } else {
        return res.status(200).send({ message: "Não há encantamentos cadastrados" });
    }
}

// Buscar encantamento por ID

export const getEncantamentoById = (req, res) => {
    const { id } = req.params;
    const encantamento = listEncantamentos.getEncantamento(id);
    if (encantamento) {
        return res.status(200).send({ encantamento });
    } else {
        return res.status(200).send({ message: "Encantamento não encontrado" });
    }
}

// Adicionar encantamento

export const createEncantamento = (req, res) => {
    const errors = [];

    // Lower Case

    req.body.titulo = req.body.titulo.toLowerCase();
    req.body.descricao = req.body.descricao.toLowerCase();
    req.body.tipoEncanto = req.body.tipoEncanto.toLowerCase();

    const { titulo, descricao, tipoEncanto, dano, defesa, nivel } = req.body;

    // verificações

    verificacoesEncantamento(titulo, descricao, tipoEncanto, dano, defesa, nivel, errors);

    if (errors.length > 0) {
        return res.status(400).send({ errors });
    } else {
        const encantamento = new Encantamento(titulo, descricao, tipoEncanto, dano, defesa, nivel);
        listEncantamentos.addEncantamento(encantamento);
        return res.status(201).send({ message: "Encantamento criado com sucesso" });
    }

}

// Deleta encantamento

export const deleteEncantamento = (req, res) => {
    const { id } = req.params;
    const encantamento = listEncantamentos.getEncantamento(id);

    if (!encantamento) {
        return res.status(404).send({ message: "Encantamento não encontrado" });
    }

    listEncantamentos.removeEncantamento(id);

    return res.status(200).send({ message: "Encantamento deletado com sucesso" });
}

// Atualiza encantamento

export const updateEncantamento = (req, res) => {
    const errors = [];

    const { id } = req.params;
    const { titulo, descricao, tipoEncanto, dano, defesa, nivel } = req.body;

    if (!titulo) {
        errors.push("Título não informado");
    }
    if (!descricao) {
        errors.push("Descrição não informada");
    }
    if (!tipoEncanto) {
        errors.push("Tipo de encanto não informado");
    }
    if(!dano && !defesa) {
        errors.push("O valor do dano ou da defesa tem que ser informado");
    }
    if (!nivel) {
        errors.push("Nível não informado");
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
        const encantamento = listEncantamentos.getEncantamento(id);
        if (!encantamento) {
            return res.status(404).send({ message: "Encantamento não encontrado" });
        }
        const updateEncantamento = listEncantamentos.updateEncantamento(id, titulo, descricao, tipoEncanto, dano, defesa, nivel);
        return res.status(200).send({ message: "Encantamento atualizado com sucesso", updateEncantamento });
    }
}


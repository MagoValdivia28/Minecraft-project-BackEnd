export const verificacoesEquipamento = (nome, descricao, material, tipo, dano, defesa, cor, errors) => {
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
    if (tipo !== "espada" && tipo !== "capacete" && tipo !== "peitoral" && tipo !== "calca" && tipo !== "bota") {
        errors.push("Tipo deve ser espada, capacete, peitoral, calça ou bota");
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
}

export const verificacoesEncantamento = (titulo, descricao, tipoEncanto, dano, defesa, nivel, errors) => {
    if (!titulo) {
        errors.push("Título não informado");
    }
    if (!descricao) {
        errors.push("Descrição não informada");
    }
    if (!tipoEncanto) {
        errors.push("Tipo de encanto não informado");
    }
    if (tipoEncanto !== "espada" && tipoEncanto !== "capacete" && tipoEncanto !== "peitoral" && tipoEncanto !== "calca" && tipoEncanto !== "bota") {
        errors.push("Tipo deve ser espada, capacete, peitoral, calça ou bota");
    }
    if (!dano && !defesa) {
        errors.push("O valor do dano ou da defesa tem que ser informado");
    }
    if (!nivel) {
        errors.push("Nível não informado");
    }
    if (isNaN(dano) || isNaN(defesa) || isNaN(nivel)) {
        errors.push("Dano, defesa e nivel devem ser um número");
    }
    if (dano > 20 || dano < 0) {
        errors.push("Dano deve ser entre 0 e 20");
    }
    if (defesa > 20 || defesa < 0) {
        errors.push("Defesa deve ser entre 0 e 20");
    }
}

export const verificacoesMembro = (nome, idade, descricao, urlimagem, cargo, cor, errors) => {
    if (!nome) {
        errors.push("Nome não informado");
    }
    if (!idade) {
        errors.push("Idade não informada");
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
    if (isNaN(idade)) {
        errors.push("Idade deve ser um número");
    }
    if (idade < 0) {
        errors.push("Idade deve ser maior que 0");
    }
    if (!cargo) {
        errors.push("Cargo não informado");
    }
    if (!cor) {
        errors.push("Cor não informada");
    }
}
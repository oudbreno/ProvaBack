const fs = require("fs")
const {v4: gerarId} = require("uuid")
function novoUsuario(nome){
    const id = gerarId();
    const data = Date.toISOString();
    const mensagem = `${id} - ${data} - ${nome}`;
}


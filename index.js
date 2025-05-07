const fs = require("fs")
const {v4: gerarId} = require("uuid")
function novoUsuario(nome){
    const id = gerarId();
    const data = new Date().toLocaleDateString('pt-BR');
    const mensagem = `${id} - ${data} - ${nome}\n`;

fs.appendFileSync('logs.txt', mensagem);
console.log(id)

}

novoUsuario("breno")
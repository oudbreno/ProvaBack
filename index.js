const fs = require("fs")
const {v4: gerarId} = require("uuid")
const express = require('express')
const app = express();
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });

app.use(express.json());

app.post('/cadastro', (req,res) =>{
    const {nome} = req.body;
    if(!nome){
        return res.status(400).json;
    }

    const id = gerarId();
    const data = new Date().toLocaleDateString('pt-BR');
    const mensagem = `${id} - ${data} - ${nome}\n`;

    fs.appendFileSync('logs.txt', mensagem);
    res.json({ id, mensagem: "Log criado com sucesso!" });

})


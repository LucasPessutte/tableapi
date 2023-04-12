const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config()

const allowedOrigin = process.env.allowedOrigin;

const app = express();

app.use(cors({
    origin: allowedOrigin
}))

app.use(bodyParser.json());


app.get('/', (req,res) =>  {
    res.status(200).json({ msg: "Servidor Rodando" })
})

app.get('/pessoas', (req,res) =>  {
    const obj = [
        {
            "id": "1",
            "Nome": "João",
            "Data_Nascimento": "01/01/2002",
            "CPF": "111-222-333-98",
            "Endereco": "Rua 1, centro, SP, CEP: 13444-002",
            "Status": "Ativo"
        },
        {
            "id": "2",
            "Nome": "Lucas",
            "Data_Nascimento": "25/04/2001",
            "CPF": "111-222-333-98",
            "Endereco": "Rua 1, centro, SP, CEP: 13444-002",
            "Status": "Ativo"
        },
        {
            "id": "3",
            "Nome": "Fabio",
            "Data_Nascimento": "01/01/2002",
            "CPF": "111-222-333-98",
            "Endereco": "Rua B, vila arruda, SP, CEP: 13444-002",
            "Status": "Ativo"
        }
    ]
    res.status(200).json(obj);
})

// routes(app)

const port = 5000

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))
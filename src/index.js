const fsPromisse = require("fs/promises")
const express = require("express")
const app = express()
const { buscarEndereco } = require("utils-playground")
const fs = require("fs")

app.get("/enderecos/:cep", async (req, res) => {
    try {
        let { cep } = req.params
        const endereco = await buscarEndereco(cep)
        let bancoDeDados = fs.readFileSync("./src/enderecos.json")
        const jsonEnderecos = JSON.parse(bancoDeDados)
        let existe = false
        let cadastrado = jsonEnderecos.find((rua) => {
            if (rua.cep === cep) {
                existe = true
            } else {
                existe = false
            }
            return rua.cep === cep
        })

        if (existe) {
            res.send(cadastrado)
        } else {
            jsonEnderecos.push(endereco)
            const arrayJson = JSON.stringify(jsonEnderecos)
            fs.writeFileSync("./src/enderecos.json", arrayJson)
            const bancoDeDados = fs.readFileSync("./src/enderecos.json")
            res.send(bancoDeDados)

        }

    } catch (error) {
        res.send(`ERRO: ${error.message}`)
    }
})

app.listen(3000)
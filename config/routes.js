const express = require("express");
const routes = express.Router()

let alunos = [
    { "1": { Nome: 'Aluno 1', Idade:"16"} },
    { "2": { Nome: 'Aluno 2', Idade:"16"} },
    { "3": { Nome: 'Aluno 3', Idade:"16"} }
]

routes.get("/", (req, res) => {
    return res.json(alunos)
})

routes.post("/add",  (req, res) => {
    const body = req.body

    if (!body)
        return res.statusCode(400).end()

    alunos.push(body)
    return res.json(body)

})

module.exports = routes

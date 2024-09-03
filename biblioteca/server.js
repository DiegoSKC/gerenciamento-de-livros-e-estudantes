const express = require("express")
const aluguel_controller = require("./controllers/aluguel.js")
const estudante_controller = require("./controllers/estudante.js")
const livro_controller = require("./controllers/livro.js")
const app = express()
const port = 5000
app.use(express.json)

//GERENCIAMENTO DE ALUGUEL
app.post("/aluguel", (req, res) => {
    let aluguel = req.body
    let code = aluguel_controller.store(aluguel)
    res.status(code).json()
})

app.get("/aluguel", (req, res) => {
    res.json(aluguel_controller.index())

})

app.get("/aluguel/:id", (req, res) => {
    let aluguel = aluguel_controller.show(req.params.id)
    res.json(aluguel)
})

app.put("/aluguel/:id", (req, res) => {
    let aluguel = req.body
    let code = aluguel_controller.update(req.params.id, aluguel)
    res.status(code).json()
})

app.delete("/aluguel/:id", (req, res) => {
    aluguel_controller.destroy(req.params.id)
    res.json()
})


//FIM DO GERENCIAMENTO DE ALUGUEL

//GERENCIAMENTO DE ESTUDANTE
app.post("/estudante", (req, res) => {
    let estudante = req.body
    let code = estudante_controller.store(estudante)
    res.status(code).json()
})

app.get("/estudante", (req, res) => {
    res.json(estudante_controller.index())

})

app.get("/estudante/:id", (req, res) => {
    let estudante = estudante_controller.show(req.params.id)
    res.json(estudante)
})

app.put("/estudante/:id", (req, res) => {
    let funcionaro = req.body
    let code = estudante_controller.update(req.params.id, funcionaro)
    res.status(code).json()
})

app.delete("/estudante/:id", (req, res) => {
    estudante_controller.destroy(req.params.id)
    res.json()
})

//FIM DO GERENCIAMENTO DE ESTUDANTE

//GERENCIAMENTO DE LIVRO
app.post("/livro", (req, res) => {
    let livro = req.body
    let code = livro_controller.store(livro)
    res.status(code).json()
})

app.get("/livro", (req, res) => {
    res.json(livro_controller.index())

})

app.get("/livro/:id", (req, res) => {
    let livro = livro_controller.show(req.params.id)
    res.json(livro)
})

app.put("/livro/:id", (req, res) => {
    let livro = req.body
    let code = livro_controller.update(req.params.id, livro)
    res.status(code).json()
})

app.delete("/livro/:id", (req, res) => {
    livro_controller.destroy(req.params.id)
    res.json()
})

app.listen(port, () => {
    console.log("Gerenciador de distribuiçao executando na porta " + port)
})
//FIM DO GERENCIAMENTO DE LIVRO"
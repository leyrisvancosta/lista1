import express from 'express'
const app = express()
import { urlencoded } from 'body-parser'

app.use(urlencoded({ extended: true }))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    console.log(req.query)
    resp.send(`<h1> Parabéns. Usuário incluído!! </h1>`)
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1> Parabéns. Usuário alterado!! </h1>')
})

app.listen(3003)

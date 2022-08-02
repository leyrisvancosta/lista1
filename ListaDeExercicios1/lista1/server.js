import express from 'express'
const app = express()
import { urlencoded } from 'body-parser'

app.use(urlencoded({ extended: true }))

app.post('/cadastro', (req, resp) => {
    console.log(req.body)
    console.log(req.query)
    resp.send(`<h1> Parabéns. Cliente cadastrado!! </h1>`)
})

app.listen(3003)

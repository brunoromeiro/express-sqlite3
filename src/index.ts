import express from 'express';
import cors from 'cors';
import itensRouter from './routers/router';

// porta do servidor
const PORT = process.env.PORT || 4000

// host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

// app express
const app = express()

// json
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// endpoint raiz
app.get('/', (req, res) => {
    res.send('Bem vindo!')
})

// cors
app.use(cors({
    origin: ['http://localhost:3000']
}))

// rotas
app.use('/api', itensRouter)

// resposta padrão para quaiquer outras requests
app.use((req, res) => {
    res.status(404)
})

// inicia servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})
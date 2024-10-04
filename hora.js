const express = require('express') 
const router = express.Router()

const app = express()
const porta = 3333

const data = new Date()


function mostraHora(request, response){
    const hora = data.toLocaleTimeString('pt-BR')
    response.send(hora)
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta)
}

// Definindo a rota diretamente no 'router'
router.get('/hora', mostraHora)

// Usando o 'router' com o 'app'
app.use(router)

app.listen(porta, mostraPorta)
const express = require('express') 
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
    response.json({
        nome: 'Carolina Marani',
        imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQEFKnbVgjemJQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727044680902?e=1732752000&v=beta&t=-JIal4ykYGntk55mmBcKVu8GpE5e3W7LF1NfYEzJ9gc',
        minibio: 'Desenvolvedora e editora de livros'
    })
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)
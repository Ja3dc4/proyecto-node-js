import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Bienvenido al servidor!</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.listen(process.env.PORT || 3000)    // Esto de aqui "process.env.PORT", es para detectar el puerto que nos da 
console.log('Servidor escuchando en puerto', process.env.PORT || 3000)  // Vercel para desplegar nuestra aplicacion web.
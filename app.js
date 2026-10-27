const express = require('express')
const axios = require('axios')
const app = express()

app.set('view engine', 'ejs')

const PORT = 3000
const API_URL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'

// Rota principal: busca a frase e mostra na tela
app.get('/', async (req, res) => {
  try {
    const response = await axios.get(API_URL)
    // A API devolve um array, então pegamos o primeiro item
    const quote = response.data[0]
    res.render('index', { quote: quote, erro: null })
  } catch (err) {
    console.error(err.message)
    res.render('index', { quote: null, erro: 'Não foi possível buscar a mensagem do dia.' })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

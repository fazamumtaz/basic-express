const express = require('express')

const app = express()

const PORT = 8090

app.get('/', (request, response) => {
  response.json({greeting: 'halo dunia'})
})

app.get('/movies', (request, response) => {
  console.log('Aw path movies di-hit')
  response.json({
    data: "Ini list movie yang gua males ngetiknya"
  })
})

app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`))
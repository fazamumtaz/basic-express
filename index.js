const express = require('express')

const app = express()

const PORT = 8090

app.get('/', (request, response) => {
  response.json('halo dunia')
})

app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`))
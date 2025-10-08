const express = require('express')

const app = express()

const PORT = 8090

app.get('/', (request, response) => {
  response.json({greeting: 'halo dunia'})
})


// melihat list favorite movies
app.get('/my-movies', (request, response) => {
  console.log('Aw path movies di-hit')
  response.json({
    data: "Ini list movie yang gua males ngetiknya"
  })
})

// menambahkan list favorite movies
app.post('/my-movies', (request, response) => {
  console.log('Adding new favorite movie to the list')
  const {data} = request.body
  console.log(data)
  response.status(201).json({
    message: 'Success!'
  })
})

// menghapus favorite movie dari list
app.delete('/my-movies/:id/:token', () => {
  console.log('Deleting movie from the list')
  response.json({message: 'Delete favorite movie...'})
  const { id, token } = request.params
  console.log({id, token})
  response.status(204).json({mess: success})
})

// menambahkan data user untuk verifikasi sistem
app.post('/token', (request, response) => {
  console.log('Creating user from token to database...')
  const {data} = request.body;
  response.status(201).json({message: 'token created...'})
})

app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`))
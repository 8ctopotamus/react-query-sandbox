const path = require('path')
const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const PORT = process.env.PORT || 3001
const isProd = process.env.NODE_ENV === 'production'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

if (isProd) {
  app.use(express.static(path.join(__dirname, 'client', 'build')))
}

app.use(routes)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`))
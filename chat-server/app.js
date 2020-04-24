const express = require('express')
const app = express()
const port = process.env.PORT | 3000
const path = require('path')

app.use(express.static(path.join(__dirname, 'app')))
app.get('/', (request, response) => response.send("<h1>hello world</h1>"))
app.post('/', (request, response) => response.send('Hello World! by Post Request'))
app.listen(port, () => console.log("example app listening on port: %d!", port))

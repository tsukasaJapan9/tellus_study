const express = require('express')
const app = express()

// const path = require('path')

app.set('port', (process.env.PORT || 5000));

// app.use(express.static(path.join(__dirname, 'app')))
app.get('/', (request, response) => response.send("<h1>hello world</h1>"))
// app.post('/', (request, response) => response.send('Hello World! by Post Request'))
app.listen(app.get('port'), () => console.log("example app listening on port: %d!", app.get('port')))

const express = require('express')
const app = express()

app.use('/public', express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.listen(3000)
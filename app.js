const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001
const app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))


// app.post('/email', sendEmail)


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))

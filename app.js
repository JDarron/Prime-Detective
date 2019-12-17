const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001
const app = express()


const detectPrimeNumber = function (req, res) {
    const number = +req.body.number

    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            res.status(200).json({
                prime: false 
            })
            return
        }
    }

    res.status(200).json({
        prime: number > 1
    })
}


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))


app.post('/detect', detectPrimeNumber)


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))

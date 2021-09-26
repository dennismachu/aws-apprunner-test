require('dotenv').config()

const express = require('express'),
    helmet = require('helmet'),
    cors = require('cors'),
    morgan = require('morgan'),
    xss = require('xss-clean'),
    hpp = require('hpp');

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.raw())
app.use(express.text())
app.use(morgan('dev'))
app.use(cors())
app.use(helmet()) //Adds extra headers to protect the routes
app.use(xss()) //To prevent a harmful script being sent with the POST request
app.use(hpp()) //To prevent HTTP Parameter Pollution.

app.get('/', function (req, res) {
    res.status(200).json({
        message: "success"
    })
});

/**
 * Server Port
 */
const PORT = process.env.PORT || 8080
app.listen(PORT, function () {
    console.log(`File Upload Micro-Service running on Port:${PORT}`);
});
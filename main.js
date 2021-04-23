// Albina Shelton

const express = require('express')
const app = express()
var path = require('path');
var bodyParser = require('body-parser');
const port = 3000
var fs = require('fs');
const router = express.Router();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
var array = []
array.length = 10

app.use(express.static(path.join(__dirname, 'public')));
/**
 * Error 500
 */
app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || "Error 500"
        },
    });
});

router.get('/', function(req, res) {

    res.sendFile(path.join(__dirname + '/index.html'));

});

app.get('/info', (req, res) => {
        console.log(req.body)
        var data = req.body

        res.send(data)

    })
    //add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
// Albina Shelton

const express = require('express')
const app = express()
var path = require('path');
const port = 3000
const router = express.Router();

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


//add the router
app.use('/', router);
app.listen(process.env.port || port);

console.log('Running at Port 3000');
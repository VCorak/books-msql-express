const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json()); // parse JSON
app.use(bodyParser.urlencoded({ // parse url encoded body
    extended: true,
}))

app.get('/', (req, res) => {
    res.json({'message': 'It is alive'})
})

app.listen(port, () => {
    console.log(`App listening at http://${port}`)
})
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/',(req, res) => {
    res.send('hello world!');
})


app.listen(3000, () => {
    console.log('listening to port 3000');
})
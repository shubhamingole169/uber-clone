const dotent = require('dotenv')
dotent.config();
const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors())


app.get('/', (req, res) => {
    res.send('hellow world');
})


module.exports = app;
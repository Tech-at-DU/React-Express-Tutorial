require('dotenv').config();
const routes = require('./routes/routes');
const express = require('express');

const app = express();
app.use(express.json());
app.use('/', routes)

const port = 4000
app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})



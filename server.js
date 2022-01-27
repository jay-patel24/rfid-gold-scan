const express = require('express');
const app = express();
const port = 3000;
const routerFile = require('./routes/index.js')

app.use('/', routerFile)
app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})
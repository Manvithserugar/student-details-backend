const express = require('express');
const registerationRoute = require('./routers/registerationRoute')

const cors=require("cors");

const port = 3000;
const app = express();

app.use(cors())
app.use(express.json());

app.use('/registration',registerationRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
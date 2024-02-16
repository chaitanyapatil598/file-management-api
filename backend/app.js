const express = require('express');
const app = express();
app.use(express.json())
const errorMiddelWare = require("./middleware/error")
const file = require("./routes/fileRoute")

app.use("/api/v1",file)

//Error middleware 
app.use(errorMiddelWare)

module.exports = app;
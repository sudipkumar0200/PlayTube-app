const express = require("express")
const app = express()
const DbConnection = require("./db/index")
DbConnection()

app.listen(process.env.PORT || 3001)
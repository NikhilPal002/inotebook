const connectToMongo = require('./db');
const express = require('express')
connectToMongo();
const app = express()
const port = 5000

app.use(express.json())             // agar aap use karna chate hai body ko toh ek middle ware use karna padega
// Available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})



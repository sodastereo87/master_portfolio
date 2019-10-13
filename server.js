const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 3001

app.use(cors())
// here error
app.use(bodyParser.json())

app.listen(PORT, function() {
  console.log('server running on port:' + PORT)
})

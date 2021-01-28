const express = require('express')
var cors = require('cors')

//Create express server
const app = express()

//Add CORS
app.use(cors())

//Routes
app.use(require('./routes'))
app.use(require('./routes/operate'))
app.use(require('./routes/retrieve'))
app.use(require('./routes/update'))
app.use(require('./routes/delete'))








// Listen for petitions
app.listen(4000, () => {
    console.log("Server running on port 4000")
})
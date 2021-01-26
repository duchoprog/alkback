const express= require('express')

//Create express server
const app=express()

//Routes
app.use(require('./routes'))
app.use(require('./routes/operate'))
app.use(require('./routes/retrieve'))








// Listen for petitions
app.listen (4000, ()=>{
    console.log("Server running on port 4000")
})
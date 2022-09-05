const express = require('express')
const app = express()
const mongoose = require('mongoose')


require('dotenv').config({path:'./config/.env'})



app.listen(process.env.PORT, ()=> {
    console.log('Server is running')
})
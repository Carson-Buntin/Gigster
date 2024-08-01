const express = require('express')
const mongoose = require('mongoose')
const app = express()
mongoose.set('strictQuery', false)

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const PORT = process.env.PORT || 5000
const CONNECTION = process.env.CONNECTION


app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree", "userFour"]})
} )

const start = async() => {
    try{
        await mongoose.connect(CONNECTION)
        app.listen(PORT, () => {
            console.log("Server started on port " + PORT)
        })
    } catch(error) {
        console.log(error.message)
    }
}
start()


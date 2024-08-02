const express = require('express')
const mongoose = require('mongoose')
const Preformer = require('./models/preformer')

const app = express()
mongoose.set('strictQuery', false)

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const PORT = process.env.PORT || 5000
const CONNECTION = process.env.CONNECTION

app.use(express.json());

/*
const preformer = new Preformer({
    userName: 'Carson Buntin',
    password: '12345'
})

preformer.save()
*/

app.get("/api/getAllPreformers", async (req, res) => {
    try {
        const result = await Preformer.find()
        res.send({"preformers": result})
    } catch(e) {
        res.status(500).json({error: e.message})
    }

})

app.post("/api/setPreformer", async (req, res) => {
    const preformer = new Preformer(req.body)
    try {
        await preformer.save()
        res.status(201).json({preformer})
    } catch(e) {
        if (e.code === 11000) {
            if (e.message.includes('username') || e.message.includes('email')) {
                res.status(400).json({ error: 'Email or username already in use' });
            } else {
                res.status(400).json({ error: 'Duplicate key error' });
            }
        } else {
            res.status(400).json({ error: e.message });
        }
    }
})

const start = async() => {
    try{
        await mongoose.connect(CONNECTION)
        app.listen(PORT, () => {
            console.log("Server started on port " + PORT)
        })
    } catch(e) {
        console.log(e.message)
    }
}
start()


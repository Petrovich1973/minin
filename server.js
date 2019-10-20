const express = require('express')
const ip = require('ip')
const cors = require('cors')
const axios = require('axios')
const port = process.env.PORT || 9000

const app = express()

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))




const getAgent = () => axios.get('http://httpbin.org/get')
const getUsers = () => axios.get('https://my.api.mockaroo.com/users.json?key=d0878e70')




app.get('/api/v1/agent', async (req, res, next) => {

    try {
        const agent = await getAgent()
        const users = {}//await getUsers()
        res.json({...agent.data, users: users.data})
    } catch (e) {
        //this will eventually be handled by your error handling middleware
        res.status(500).send(e.message)
    }

})



//////////////////////////////////////////////////////////

app.use( (req, res) => {
    res.status(404).send('404 — Страница не найдена!')
})

app.use( (err, req, res) => {
    console.error(err.stack);
    res.status(500).send('500 — Что-то не так!')
})

app.listen(port)

console.log('Start server http://' + ip.address() + ':' + port)
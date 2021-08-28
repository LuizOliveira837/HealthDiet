import express from 'express'
import { nutritionRoute } from './routes/nutritionist.routes'

const server = express()

server.use(express.json())

server.use('/nutritionist',nutritionRoute)




server.listen(3333, ()=>console.log("SERVER ON"))
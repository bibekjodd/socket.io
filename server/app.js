const express = require('express');
const app = express();
require('dotenv').config({ path: './.env' })
const port = process.env.PORT || 3000
require('colors')
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors')
app.use(cors());


const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ["GET", "POST"]
    }
});


io.on('connection', (socket) => {
    // console.log(`User connected: ${socket.id}`)
    socket.on('join_room', (data) => {
        socket.join(data);
    })
    socket.on('send_message', (data) => {
        socket.to(data.room).emit('receive_message', data);
    })


})





server.listen(port, () => {
    console.log(`Server listening at port http://localhost:${port}`.yellow);
})
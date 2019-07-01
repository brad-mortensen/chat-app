const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http);

const port = process.env.PORT || 3000

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

io.on('connection', socket => {
  socket.emit('chat message', `A new user has connectered`)
  socket.on('disconnect', () => socket.emit('chat message', `User has disconnected`))
  socket.on('chat message', msg => socket.emit('chat message', msg))
})

http.listen(port, () => console.log(`listening on port: ${port}`))
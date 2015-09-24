'use strict'

let handler = (req, res) => {
  fs.readFile(__dirname + '/public/index.html', (err, data) => {
    if (err) {
      res.writeHead(500)
      return res.end('Error loading index.html')
    }

    res.writeHead(200)
    res.end(data)
  })
}

var app = require('http').createServer(handler)
var io = require('socket.io')(app)
var fs = require('fs')
var Robot = require('./lib/robot')

app.listen(8081);

var robot = new Robot()
robot.connect()
robot.on('connected', () => console.log('Robot connected'))

io.on('connection', (socket) => {
  socket.on('cmd', (cmd, speed) => {
    robot.command(cmd, speed)
  })
})
var http = require('http')
var path = require('path')
var express = require('express')
var Primus = require('primus')
var Sumo = require('./lib/sumo')

var app = express()
var server = http.createServer(app)
var primus = new Primus(server, { transformer: 'websockets', parser: 'JSON' })
var port = process.env.PORT || 8082
var sumo = new Sumo()

sumo.connect()
sumo.on('connected', () => console.log('Sumo connected'))

app.use(express.static(path.join(__dirname, 'public')))
primus.use('emitter', require('primus-emitter'))

server.listen(port, function () {
  console.log('Listening on port %s', port)
})

primus.on('connection', function (socket) {

  socket.on('cmd', function (cmd, arg) {
    sumo.command(cmd, arg)
  })

  sumo.on('battery', function (battery) {
    socket.send('battery', battery)
  })

  sumo.on('video', function (data) {
    socket.send('video', data.toString('base64'))
  })

})

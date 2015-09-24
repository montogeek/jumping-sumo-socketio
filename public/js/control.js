var socket = io('http://localhost:8081')
var controls = {
  38: 'forward',
  40: 'backward',
  37: 'left',
  39: 'right',
  83: 'stop'
}

function onKeyDown (e) {
  var key = controls[e.keyCode]
  if (!key) return;

  socket.emit('cmd', key, 50)
}

document.addEventListener('keydown', onKeyDown, false)
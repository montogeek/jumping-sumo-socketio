var socket = Primus.connect()
var battery = document.querySelector('#battery')
var img = document.querySelector('img')

var controls = {
  38: 'up',
  40: 'down',
  37: 'left',
  39: 'right',
  83: 'stop', // s
  74: 'jump', // j
  76: 'long', // l
  49: 'spin', // 1
  50: 'tap', // 2
  51: 'slowshake', // 3
  52: 'metronome', // 4
  53: 'ondulation', // 5
  54: 'spinjump', // 6
  55: 'spinposture', // 7
  56: 'spiral', // 8
  57: 'slalom', // 9
  81: 'jumper', // q
  87: 'standing', // w
  69: 'kicker' // e
}

socket.on('battery', function (b) {
  battery.innerHTML = b + '%'
})

socket.on('video', function (data) {
  img.src = 'data:image/jpeg;base64,' + data
})

document.addEventListener('keydown', onKeyDown, false)

function onKeyDown (e) {
  var key = controls[e.keyCode]
  if (!key) return;

  socket.send('cmd', key, 50)
}

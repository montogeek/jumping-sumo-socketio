'use strict'

const sumo = require('node-sumo')
const EventEmitter = require('events').EventEmitter

class Sumo extends EventEmitter {
  constructor () {
    super()

    this.connected = false
    this.drone = sumo.createClient()
    this.video = this.drone.getVideoStream()

    this.video.on('data', (data) => this.emit('video', data))
    this.drone.on('battery', (battery) => this.emit('battery', battery))
  }

  connect () {
    this.drone.connect(() => {
      this.connected = true
      this.drone.postureJumper()
      this.emit('connected')
    })
  }

  command(cmd, arg) {
    if (!this.connected) return

    let drone = this.drone

    switch (cmd) {
      case 'up':
        // drone.forward(arg)
        console.log(cmd);
        break;
      case 'down':
        // drone.backward(arg)
        console.log(cmd);
        break;
      case 'left':
        // drone.left(arg)
        console.log(cmd);
        break;
      case 'right':
        // drone.right(arg)
        console.log(cmd);
        break;
      case 'stop':
        // drone.stop()
        console.log(cmd);
        break;
      case 'jump':
        // drone.postureJumper()
        console.log(cmd);
        // drone.animationsHighJump()
        console.log(cmd);
        break;
      case 'long':
        // drone.animationsLongJump()
        console.log(cmd);
        break;
      case 'spin':
        // drone.animationsSpin()
        console.log(cmd);
        break;
      case 'tap':
        // drone.animationsTap()
        console.log(cmd);
        break;
      case 'slowshake':
        // drone.animationsSlowShake()
        console.log(cmd);
        break;
      case 'metronome':
        // drone.animationsMetronome()
        console.log(cmd);
        break;
      case 'ondulation':
        // drone.animationsOndulation()
        console.log(cmd);
        break;
      case 'spinjump':
        // drone.animationsSpinJump()
        console.log(cmd);
        break;
      case 'spinposture':
        // drone.animationsSpinToPosture()
        console.log(cmd);
        break;
      case 'spiral':
        // drone.animationsSpiral()
        console.log(cmd);
        break;
      case 'slalom':
        // drone.animationsSlalom()
        console.log(cmd);
        break;
      case 'standing':
        // drone.postureStanding()
        console.log(cmd);
        break;
      case 'jumper':
        // drone.postureJumper()
        console.log(cmd);
        break;
      case 'kicker':
        // drone.postureKicker()
        console.log(cmd);
        break;
    }
  }
}

module.exports = Sumo

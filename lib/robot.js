'use strict'

const sumo = require('node-sumo')
const EventEmitter = require('events').EventEmitter

class Robot extends EventEmitter {
  constructor() {
    super()

    this.connected = false
    this.drone = sumo.createClient()
  }

  connect() {
    this.drone.connect(() => {
      this.connected = true;
      this.drone.postureJumper()
      this.emit('connected')
    })
  }

  command(cmd, speed) {
    this.drone[cmd](speed)
  }
}

module.exports = Robot
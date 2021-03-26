const h = require('../utils/helpers')
const options = require('../utils/options.json')
const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero', 'ten', 'eleven']
const twemoij = require('twemoji');

class Toast {
  constructor (color, icon, duration, positionX, positionY, fontColor, fontTone, tone, shape, speed) {
    this.color = color,
    this.icon = icon,
    this.duration = duration,
    this.positionX = positionX,
    this.positionY = positionY,
    this.fontColor = fontColor,
    this.fontTone = fontTone,
    this.tone = tone,
    this.shape = shape,
    this.speed = speed,
    this.buttons = [],
    this.html,
    this.id,
    this.title,
    this.message
  }

  as (shape) {
    this.shape = shape
    return this
  }

  for (ms) {
    this.time = ms
    return this
  }

  from (positionY, positionX = this.positionX) {
    this.positionX = positionX
    this.postionY = positionY
    return this
  }

  with (params) {
    Object.keys(params).forEach((p) => {
      let object = params
      if (options.includes(p)) {
        eval('this.' + p + ' = ' + 'object.' + p)
      }
    })
    return this
  }

  default (title, message) {
    this.title = title
    this.message = message
    return this
  }

  danger (title, message) {
    this.title = title
    this.message = message
    this.color = 'red'
    this.fontColor = 'gray'
    this.icon = 'fas fa-hand-paper'
    return this
  }

  success (title, message) {
    this.title = title
    this.message = message
    this.color = 'green'
    this.fontColor = 'gray'
    this.icon = 'fas fa-check'
    return this
  }

  warning (title, message) {
    this.title = title
    this.message = message
    this.color = 'yellow'
    this.fontColor = 'gray'
    this.icon = 'fas fa-exclamation-triangle'
    return this
  }

  show () {
    this.shape = this.shape === 'pill' ? 'rounded-full' : 'rounded'
    let wrapper = document.createElement('DIV')
    wrapper.classList = `fixed z-50 ease-in-out transform duration-${this.speed} -${this.positionY}-24 flex justify-${this.positionX} w-full`
    wrapper.innerHTML = `<div style="font-family: 'Sniglet', cursive;" class="twthis flex items-center mx-4 text-${this.fontColor}-${this.fontTone} px-6 py-4 border-0 ${this.shape} relative mb-4 bg-${this.color}-${this.tone}">
      <span id="charecters" class="lg:text-3xl md:text-2xl sm:text-xl" style="padding-right: 10px;">
        ${this.icon}
      </span>
      <span class="">
        <b class="title">${this.title}</b> ${this.message}
      </span>
    </div>`
    this.id = `tawilwind-toast-${numbers[Math.floor(Math.random() * Math.floor(11))]}`
    wrapper.id = this.id
    twemoji.parse(wrapper);
    document.body.prepend(wrapper)
    let toast = document.querySelector("#" + this.id)
    setTimeout(() => {
      toast.classList.add(`${this.position === 'top' ? '-translate-y-36' : 'translate-y-36'}`)
    }, 1)
    setTimeout(() => {
      let toast = document.querySelector("#" + this.id)
      toast.classList.remove(`${this.position === 'top' ? '-translate-y-36' : 'translate-y-36'}`)
      toast.classList.add(`${this.position === 'top' ? 'translate-y-36' : '-translate-y-36'}`)
    }, this.duration)
    setTimeout(() => {
      toast.remove()
    }, (this.duration + this.speed + 100))
  }
}

module.exports = Toast

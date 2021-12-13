const toggle = document.querySelector('.toggle')
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const months = [
  'jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]
const setTime = () => {
  const time = new Date()

  secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(
    time.getSeconds(),
    0,
    59,
    0,
    360
  )}deg)`
  minuteEl.style.transform = `translate(-50%,-100%) rotate(${scale(
    time.getMinutes(),
    0,
    59,
    0,
    360
  )}deg)`
  hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(
    time.getHours() > 12 ? time.getHours() - 12 : time.getHours(),
    0,
    11,
    0,
    360
  )}deg)`
  const simpleHours =
    time.getHours() > 12 ? time.getHours() - 12 : time.getHours()
  timeEl.innerHTML = `${simpleHours}:${
    time.getMinutes() >= 10 ? time.getMinutes() : '0' + time.getMinutes()
  }  ${time.getHours() >= 12 ? 'PM' : 'AM'}`
  dateEl.innerHTML = `${days[time.getDay()]},${time.getDate()} ${
    months[time.getMonth()]
  }`
}
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min + out_min)
}
toggle.addEventListener('click', () => {
  const htmEl = document.querySelector('html')
  htmEl.classList.toggle('dark')
  toggle.innerHTML = 'Light Mode'
})
setTime()
setInterval(setTime, 1000)

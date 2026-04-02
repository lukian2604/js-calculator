const setTimeButton = document.querySelector('.set_timer_button')
const resetButton = document.querySelector('.timer_reset_button')
const startButton = document.querySelector('.timer_start_button')
const pauseButton = document.querySelector('.timer_pause_button')

const hoursInput = document.querySelector('.timer_hours_input')
const minutesInput = document.querySelector('.timer_minutes_input')
const secondsInput = document.querySelector('.timer_seconds_input')

let totalTime = 0
let intervalId = null

function setTimeFromInput() {
  const hours = Number(hoursInput.value) || 0
  const minutes = Number(minutesInput.value) || 0
  const seconds = Number(secondsInput.value) || 0

  totalTime = (hours * 3600 + minutes * 60 + seconds) * 1000

  updateDisplay(totalTime)
}

function updateDisplay(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor((ms % 3600000) / 60000)
  let s = Math.floor((ms % 60000) / 1000)

  hoursInput.value = h.toString().padStart(2, '0')
  minutesInput.value = m.toString().padStart(2, '0')
  secondsInput.value = s.toString().padStart(2, '0')
}

function startTimer() {
  if (intervalId) return
  if (totalTime <= 0) return

  intervalId = setInterval(() => {
    totalTime -= 1000
    if (totalTime <= 0) {
      totalTime = 0
      alert('⏰ Finished timer!')
      clearInterval(intervalId)
      intervalId = null
    }
    updateDisplay(totalTime)
  }, 1000)
}

function pauseTimer() {
  clearInterval(intervalId)
  intervalId = null
}

function resetTimer() {
  clearInterval(intervalId)
  intervalId = null
  totalTime = 0
  updateDisplay(totalTime)
}

setTimeButton.onclick = setTimeFromInput
startButton.onclick = startTimer
pauseButton.onclick = pauseTimer
resetButton.onclick = resetTimer

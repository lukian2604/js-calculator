const swHours = document.querySelector('.stopwatch_hours')
const swMinutes = document.querySelector('.stopwatch_minutes')
const swSeconds = document.querySelector('.stopwatch_seconds')
const swMilliseconds = document.querySelector('.stopwatch_milliseconds')

const swStartBtn = document.querySelector('.stopwatch_start_button')
const swPauseBtn = document.querySelector('.stopwatch_pause_button')
const swResetBtn = document.querySelector('.stopwatch_reset_button')

let swTime = 0
let swInterval = null

function updateStopwatchDisplay() {
  let h = Math.floor(swTime / 3600000)
  let m = Math.floor((swTime % 3600000) / 60000)
  let s = Math.floor((swTime % 60000) / 1000)
  let ms = Math.floor((swTime % 1000) / 10)

  swHours.textContent = h.toString().padStart(2, '0')
  swMinutes.textContent = m.toString().padStart(2, '0')
  swSeconds.textContent = s.toString().padStart(2, '0')
  swMilliseconds.textContent = ms.toString().padStart(2, '0')
}

function startStopwatch() {
  if (swInterval) return
  const startTime = Date.now() - swTime

  swInterval = setInterval(() => {
    swTime = Date.now() - startTime
    updateStopwatchDisplay()
  }, 10)
}

function pauseStopwatch() {
  clearInterval(swInterval)
  swInterval = null
}

function resetStopwatch() {
  clearInterval(swInterval)
  swInterval = null
  swTime = 0
  updateStopwatchDisplay()
}

swStartBtn.onclick = startStopwatch
swPauseBtn.onclick = pauseStopwatch
swResetBtn.onclick = resetStopwatch

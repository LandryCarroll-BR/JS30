const secondHand = document.querySelector(".second-hand")
const minuteHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

const setDate = () => {
  const now = new Date()

  const seconds = now.getSeconds()
  const secondsDegrees = ((seconds / 60) * 360) + 90
  if (seconds === 0) {
    secondHand.style.transition = 'none'
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  } else {
    secondHand.style.transition = 'transform 300ms cubic-bezier(0, 1.96, 0.25, 1)'
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  }

  const minutes = now.getMinutes()
  const minutesDegrees = ((minutes / 60) * 360) + 90
  if (minutes === 0) {
    minuteHand.style.transition = 'none'
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
  } else {
    minuteHand.style.transition = 'transform 300ms cubic-bezier(0, 1.96, 0.25, 1)'
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
  }

  const hours = now.getHours()
  const hoursDegrees = ((hours / 12) * 360) + 90
  if (hours === 0) {
    hourHand.style.transition = "none"
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
  } else {
    hourHand.style.transition = 'transform 300ms cubic-bezier(0, 1.96, 0.25, 1)'
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
  }

  // console.log(`${hours}:${minutes}:${seconds}`)
}

setDate()
setInterval(setDate,1000)
let countEL = document.getElementById('count-el')
let saveEL = document.getElementById('save-el')

// var to store total passenger count
let count = 0

// use console.log to debug using browser console
// console.log(count)

function increment() {
  count += 1
  countEL.innerHTML = count
}

function save() {
  let countSTR = count + ' - '
  saveEL.textContent += countSTR
  countEL.textContent = 0
  count = 0
}

let countEL = document.getElementById('count-el')

// var to store total passenger count
let count = 0

// use console.log to debug using browser console
// console.log(count)

function increment() {
  count = count + 1
  countEL.innerHTML = count
}

function save() {
  console.log(count)
}

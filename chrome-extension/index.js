let myLeads = []
const inputEL = document.getElementById('input-el')
let inputBTN = document.getElementById('input-btn')
const ulEL = document.getElementById('ul-el')
let deleteBTN = document.getElementById('delete-btn')
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
let tabBTN = document.getElementById('tab-btn')

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

tabBTN.addEventListener('click', function () {
  //   console.log('Tab button clicked')
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url)
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    render(myLeads)
  })
})

function render(leads) {
  let listItems = ''
  for (let i = 0; i < leads.length; i++) {
    listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
    `
  }
  ulEL.innerHTML = listItems
}

deleteBTN.addEventListener('dblclick', function () {
  //   console.log('Delete button clicked')
  localStorage.clear()
  myLeads = []
  render(myLeads)
})

inputBTN.addEventListener('click', function () {
  //   console.log('Button clicked')
  myLeads.push(inputEL.value)
  inputEL.value = ''
  localStorage.setItem('myLeads', JSON.stringify(myLeads))
  render(myLeads)
})

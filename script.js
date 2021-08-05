const numbers = document.querySelectorAll('.number')
const wrap = document.querySelectorAll('.wrap')
const factor = document.querySelectorAll('.factor')
const display = document.querySelector('.display input')
const backSpace = document.querySelector('.fa-backspace')
const callBtn = document.querySelector('.call')
const saveName = document.querySelector('#name')
const saveNr = document.querySelector('#nr')
const openContacts = document.querySelector('#contacts')
const closeContacts = document.querySelector('.fa-arrow-alt-circle-right')
const phoneBook = document.querySelector('.contactBook')
const ul = document.querySelector('#ul')
let arrName = []
let arrNr = []

let contactBook = {
   nameUser: '',
   nrUser: ''
}

function displayData() {
   numbers.forEach(nr => {
      nr.addEventListener('click', (e) => {
         e.target.lastElementChild.classList.add('active1')
      })

   })

   wrap.forEach(wr => {
      wr.addEventListener('click', (e) => {
         if (!e.path[0].classList.contains('num')) {
            arrName.push(e.path[0].innerText)
            display.value = arrName.join('')
            e.path[1].classList.remove('active1')
         } else {
            arrNr.push(e.path[0].innerText)
            display.value = arrNr.join('')
            e.path[1].classList.remove('active1')
         }
      })
   })
}
displayData()

function clarData() {
   arrName.pop()
   display.value = arrName.join('')
}

function call() {
   const readingNr = document.querySelector('.display input')
   const messageNr = document.querySelector('.call a')
   let x = readingNr.value
   messageNr.setAttribute('href', 'tel:' + x)
}

function saveNm() {
   let x = arrName.join('')
   contactBook.nameUser = x
   arrName = []
   document.querySelector('.display input').value = ''
}

function saveNumer() {
   let y = arrNr.join('')
   contactBook.nrUser = y
   arrNr = []
   document.querySelector('.display input').value = ''
}

function saveContact() {
   const li = document.createElement('li')
   li.innerHTML +=
      `<i class="fas fa-phone-square-alt" onclick="addNr()"></i>
    ${contactBook.nameUser}<br/>${contactBook.nrUser} <i class="fas fa-times" onclick="removeNr()"></i>`;
   ul.append(li)
}

function openBook() {
   saveContact()
   phoneBook.classList.add('active')
}

function closeBook() {
   phoneBook.classList.remove('active')
}

function removeNr() {
   document.querySelectorAll('ul>li').forEach(el => {
      el.addEventListener('click', (e) => {
         e.path[1].remove();
      })
   })
}

function addNr() {
   document.querySelectorAll('ul>li .fa-phone-square-alt').forEach(elem => {
      elem.addEventListener('click', (e) => {
         display.value = e.path[1].childNodes[3].textContent
         closeBook()
      })
   })
}

function setTime() {
   const clock = document.querySelector('.time');
   const time = new Date()
   clock.innerHTML = `${time.toLocaleTimeString()}`;
}
setInterval(setTime, 1000)

//events

backSpace.addEventListener('click', clarData)
callBtn.addEventListener('click', call)
saveName.addEventListener('click', saveNm)
saveNr.addEventListener('click', saveNumer)
openContacts.addEventListener('click', openBook)
closeContacts.addEventListener('click', closeBook)
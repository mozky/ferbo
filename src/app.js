import 'normalize.css'
import './sass/styles.scss'

console.log('From index.js!')

const ferboButton = document.getElementById('ferbo-toggle')

ferboButton.addEventListener('click', function() {
  const menu = document.getElementById('ferbo-menu')
  if (menu.classList.contains("show")) {
    menu.classList.remove("show")
  } else {
    menu.classList.add("show")
  }
})

const mexhaButton = document.getElementById('mexha-toggle')

mexhaButton.addEventListener('click', function() {
  const menu = document.getElementById('mexha-menu')
  if (menu.classList.contains("show")) {
    menu.classList.remove("show")
  } else {
    menu.classList.add("show")
  }
})
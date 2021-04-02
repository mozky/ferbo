import './style.scss'

// Basic CSS
//import './css/bootstrap.css'
//import './style.css'

// One-page CSS
import './one-page/css/fonts.css'
import './css/font-icons.css'
import './one-page/css/et-line.css'
import './css/animate.css'
import './one-page/onepage.css'

// HTML Fragments
import mainHtml from './main.html'

console.log('Hi from index.js!')

setTimeout(() => {
  const bodyRef = document.body
  bodyRef.classList.remove("loader")
  bodyRef.classList.add("stretched", "side-header")
  bodyRef.innerHTML = mainHtml
}, 250)
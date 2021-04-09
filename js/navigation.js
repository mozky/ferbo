import barba from '@barba/core'
import flip from './flip'
console.log('doning barba init')

barba.init({
  debug: true,
  transitions: [{
    name: 'inside-page',
    from: {
      namespace: [
        'home'
      ]
    },
    async leave() {
       function moveMenu() {
        console.log('doing page transition')
        const col5 = document.getElementById('col5')
        const menu = document.getElementById('ferbo-menu')
        document.getElementById('mexha-menu').style.display = 'none'
        document.getElementById('footer').style.gridArea = '2 / 6'
        document.getElementById('social').style.display = 'none'
        document.getElementById('col1').style.display = 'none'
        document.getElementById('col2').style.display = 'none'
        document.getElementById('col3').style.display = 'none'
        document.getElementById('col4').style.display = 'none'
        document.getElementById('left-col').style.gridArea = '1 / 1 / 3 / 6'
        document.getElementById('mexha-toggle').parentElement.style.display = 'none'
        document.getElementById('ferbo-toggle').parentElement.style.width = '100%'
        menu.classList.add('show')
        col5.appendChild(menu)
      }

      const menu = document.getElementById('ferbo-menu')
      const footer = document.getElementById('footer')
      const leftCol = document.getElementById('left-col')
    
      await flip([menu, footer, leftCol], moveMenu, { duration: 2 })
    },
    enter(data) {
      console.log('enter transition', data)
    }
  },
  {
    name: 'main-page',
    leave(data) {
       console.log('leaving transition home', data)
    },
    enter(data) {
      console.log('enter transition home', data)
    }
  }]
})

console.log('From index.js!')

setTimeout(() => {
  const ferboButton = document.getElementById('ferbo-toggle')
  const mexhaButton = document.getElementById('mexha-toggle')

  ferboButton.addEventListener('click', function() {
    const menu = document.getElementById('ferbo-menu')
    if (ferboButton.classList.contains('big')) {
      menu.classList.remove('show')
      ferboButton.classList.remove('big')
    } else {
      if (mexhaButton.classList.contains('big')) {
        const menu = document.getElementById('mexha-menu')

        menu.classList.remove('show')
        mexhaButton.classList.remove('big')
      }
      menu.classList.add('show')
      ferboButton.classList.add('big')
    }
  })

  mexhaButton.addEventListener('click', function() {
    const menu = document.getElementById('mexha-menu')
    if (mexhaButton.classList.contains('big')) {
      menu.classList.remove('show')
      mexhaButton.classList.remove('big')
    } else {
      if (ferboButton.classList.contains('big')) {
        const menu = document.getElementById('ferbo-menu')

        menu.classList.remove('show')
        ferboButton.classList.remove('big')
      }
      menu.classList.add('show')
      mexhaButton.classList.add('big')
    }
  })
})

setTimeout(() => {
  const col1 = document.getElementById("col1")
  const col2 = document.getElementById("col2")

  col1.classList.add("visible")
  col2.classList.add("visible")
}, 1000)
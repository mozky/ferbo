
console.log('From index.js!')

setTimeout(() => {
  const bodyRef = document.body
  bodyRef.classList.remove("loader")
  bodyRef.classList.add("stretched", "side-header")
  bodyRef.innerHTML = mainHtml
}, 250)
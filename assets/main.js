function render (container, message) {
  container.innerHTML = `<p>${message}</p>`
}

(async function () {

  const app = document.getElementById('app')

  let index = await fetch('content/index.json')
  let { message } = await index.json()

  render(app, message)

  const nav = document.createElement('nav')

  app.appendChild(nav)
})()
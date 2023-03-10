function render(container, message, body) {
  container.innerHTML = `<h2>${message}</h2><p>${body}</p>`
}

(async function () {

  const app = document.getElementById('app')

  let about = await fetch('content/about.json')
  let { message, body } = await about.json()

  render(app, message, body)

  const nav = document.createElement('nav')

  app.appendChild(nav)
})()
function render(container, message) {
  container.innerHTML = `<p>${message}</p>`
}

(async function() {
  const app = document.getElementById('app')

  // Render the message from the index.json file
  let index = await fetch('content/index.json')
  let { message } = await index.json()
  render(app, message)

  // Create a section for displaying the latest posts
  const postsSection = document.createElement('section')
  postsSection.id = 'posts'
  app.appendChild(postsSection)

  // Render the latest posts from the posts.json file
  let posts = await fetch('content/posts.json')
  let { posts: latestPosts } = await posts.json()
  latestPosts.forEach(post => {
    const postElement = document.createElement('article')
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.date}</p>
      <img src="${post.image}" alt="${post.title}">
      <p>${post.description}</p>
    `
    postsSection.appendChild(postElement)
  })
})()

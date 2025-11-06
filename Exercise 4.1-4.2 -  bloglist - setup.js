Exercises 4.1-4.2: Blog List Backend Setup
Goal: To create a basic Express app that returns a list of Blogs as JSON.
Code example:

const express = require('express')
const app = express()

const blogs = [
  { title: 'React patterns', author: 'Michael Chan', likes: 7 },
  { title: 'Go To Statement', author: 'Edsger W. Dijkstra', likes: 5 }
]

app.get('/api/blogs', (req, res) => {
  res.json(blogs)
})

app.listen(3003, () => {
  console.log('Server running on port 3003')
})

Exercises 4.11-4.14: Blog List Expansion
Goal: It allows users to add new blogs, remove blogs, make changes to existing ones.

Code Example:
app.post('/api/blogs', async (req, res) => {
  const body = req.body
  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes || 0
  })
  const savedBlog = await blog.save()
  res.status(201).json(savedBlog)
})

Explanation: This lets users add new blog posts by sending a POST request to the server

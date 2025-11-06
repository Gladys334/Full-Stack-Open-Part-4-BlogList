Exercise: 4.6-4.10: Refactoring and Async/Await
Goal: Split the app code into smaller parts and use async/await to handle things that take time, like working with the database.

Code Example:
const mongoose = require('mongoose')
const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

module.exports = mongoose.model('Blog', blogSchema)

Explanation:
The schema shows how blogs are saved in MongoDB, and async functions are used to get and add data.

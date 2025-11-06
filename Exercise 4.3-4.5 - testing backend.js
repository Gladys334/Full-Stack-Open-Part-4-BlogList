Exercise 4.3-4.5: Testing the Backend
Goal: Add jest and Supertest to test that /api/blogs returns correct JSON

Code Example:

const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

test('blogs are returned as JSON', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

Explanation: 
We use Supertest to check if our Express app is working properly by sending test requests and making sure it gives the right response

Exercises 4.15-4.23: User Creation and Authentication
Goal: Add features for signing up, logging in, and using tokens to keep users securely logged in

Code Example:
const bcrypt = require('bcryptjs')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async (req, res) => {
  const { username, name, password } = req.body
  if (!password || password.length < 3) {
    return res.status(400).json({ error: 'Password must be at least 3 characters long' })
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({ username, name, passwordHash })
  const savedUser = await user.save()
  res.status(201).json(savedUser)
})

Explanation:
User passwords are saved safely using encryption, and later steps add login options and token-based security.

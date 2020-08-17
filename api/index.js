import express from 'express'
const path = require('path')
const fs = require('fs')
// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

// Add POST - /api/login
router.get('/apple-app-site-association', (req, res) => {
  const file = fs.readFileSync(
    path.join(__dirname, './apple-app-site-association.json'),
    'utf8'
  )

  const convertedFile = JSON.parse(file)

  //   res.status(200).send(convertedFile)

  res.status(200).json(convertedFile)
})

// Add POST - /api/logout

// Export the server middleware
export default {
  //   path: '/api',
  handler: router
}

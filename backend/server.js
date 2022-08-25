import express from 'express'
 
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './Controllers/productRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

app.get('/api/products/:category', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

const PORT = process.env.PORT|| 5005

app.listen(PORT, console.log(`Server running on port ${PORT}`))

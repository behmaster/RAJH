import express from 'express'
import asyncHandler from 'express-async-handler'

const router = express.Router()
import Product from '../models/productModel.js'


//  description:  fetch all products
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

router.get('/products/:category', 
  asyncHandler(async (req, res) => {
    const products = await Product.find({category: req.params.category})
    res.json(products)
  }))


//  description:  fetch single products
router.get(
  '/products/:category',
  asyncHandler(async (req, res) => {
    const product = await Product.find(
      { category: req.params.category })
    
    if (product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
)


//  description:  fetch single products
// route          Get/api/products/:id
// access         Public

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    
    if (product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
)

export default router

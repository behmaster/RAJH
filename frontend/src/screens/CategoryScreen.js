import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Developer from '../components/Developer'
import developers from '../developers' 
import {  listProductCategory } from '../actions/productActions'
import { useParams } from 'react-router-dom'

const CategoryScreen = () => {
 const dispatch= useDispatch()
     
 const productListCategory = useSelector(state => state.productListCategory)
 const{loading, error, products} = productListCategory
 const { category } = useParams()

    useEffect(() => {
        dispatch(listProductCategory)
    }, [dispatch])
// console.log(category)




  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {' '}
          {products
          .filter((list) => list.category === category)
          .map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default CategoryScreen
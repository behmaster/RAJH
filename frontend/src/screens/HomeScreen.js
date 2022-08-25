import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'
import Developer from '../components/Developer'
import developers from '../developers' 


const HomeScreen = () => {
 const dispatch= useDispatch ()
     
 const productList = useSelector(state => state.productList)
 const{loading, error, products} = productList

    useEffect(() => {
        dispatch(listProducts())

    }, [dispatch])

    

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {' '}
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
      <h1>Your Developers</h1>
      <Row>
        {developers.map((developer) => (
          // number of columns per screen
          <Col key={developer._id} sm={12} md={6} lg={4} xl={3}>
            <Developer developer={developer} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
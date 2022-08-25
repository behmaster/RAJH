import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          {/* py = padding on the y axis, &copy; creates teh copyright symbol */}
          <Col className='text-center py-3'>Copyright &copy; RAJH Frames</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

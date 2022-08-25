import React from 'react'
import { Card } from 'react-bootstrap'

const Developer = (props) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/developer/${props.developer._id}`}>
        <Card.Img src={props.developer.image} variant='top' />
      </a>
      <Card.Body>
        <a href={`/developer/${props.developer._id}`}>
          <Card.Title as='div'>
            <strong>{props.developer.name}</strong>
          </Card.Title>
        </a>
      </Card.Body>

      <Card.Text as='div'></Card.Text>
    </Card>
  )
}

export default Developer

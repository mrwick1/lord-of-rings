import React from 'react'
import { Key, Row, Value } from './SingleCharStyle'

const SingleChar = ({title , value}) => {
  return (
    <Row>
        <Key>{title}</Key>
        <Value>:&nbsp;&nbsp;{value}</Value>
    </Row>
  )
}

export default SingleChar
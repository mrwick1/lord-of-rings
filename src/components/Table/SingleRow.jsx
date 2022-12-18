import React from 'react'
import { Link } from 'react-router-dom'
import { Tr } from './TableStyle'

const SingleRow = ({ id, _id , name, race, gender}) => {
  return (
    <Tr>
      <td>{id}</td>
      <td>{name === NaN  ? 'Nil' : name }</td>
      <td>{race === NaN  ? 'Nil' : race }</td>
      <td>{gender === NaN  ? 'Nil' : gender }</td>
      <td><Link to={_id}>Details </Link></td>
    </Tr>
  )
}

export default SingleRow
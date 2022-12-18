import React from 'react'
import SingleRow from './SingleRow'
import { TableMain, Th } from './TableStyle'

const Table = ({data}) => {
  return (
    <div>
        <TableMain>
            <thead>
                <tr>
                    <Th>ID</Th>
                    <Th>Name</Th>
                    <Th>Race</Th>
                    <Th>Gender</Th>
                    <Th>Actions</Th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index)=>{
                    return <SingleRow  key={row._id} id={index}  {...row} />
                })}
            </tbody>
        </TableMain>
    </div>
  )
}

export default Table
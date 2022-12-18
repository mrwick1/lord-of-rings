import React from 'react'
import { H3 } from '../../consts/theme'
import { TitleCont } from './TitleStyle'

const Title = ({title , name}) => {
  console.log(name)
  return (
    <TitleCont>
        <H3>{name ? ` ${title} > ${name}` : title}</H3>
        
    </TitleCont>
  )
}

export default Title
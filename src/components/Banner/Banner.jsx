import React from 'react'
import { H1, H4 } from '../../consts/theme'
import { BannerContainer, Contents } from './BannerStyle'

const Banner = () => {
  return (
    <>
      <BannerContainer>
        <Contents>
          <H1>The Lord of Rings API</H1>
          <H4>The one API to rule them all</H4>
        </Contents>
      </BannerContainer>
    </>

  )

}

export default Banner
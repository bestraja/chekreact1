import React from 'react'
import { Data } from '../product'
function Image() {
  return (
    <div><img  className='img-thumbnail' src={Data[0].URL}/></div>
  )
}

export default Image
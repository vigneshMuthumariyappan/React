import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {

    const {id} = useParams();

    return (
      <div>product's id is: {id}</div>
    )
}

export default Product
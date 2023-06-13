import React from 'react'

import { Link, useParams } from 'react-router-dom'


const ProductDetail = () => {
    const params = useParams()

    return (
        <>
            <h1>ProductDetail</h1>
            {params.productId}
            <p><Link to=".." relative='path'>BACK</Link></p>
        </>
    )
}

export default ProductDetail
import React from 'react'
import { Link } from 'react-router-dom'

const PRODUCTS = [
    { id: 'pr1', title: 'Product 1' },
    { id: 'pr2', title: 'Product 2' },
    { id: 'pr3', title: 'Product 3' },
    { id: 'pr4', title: 'Product 4' }
]

const ProductsPage = () => {
    return (
        <>
            <div>ProductsPage</div>
            <ul>
                {PRODUCTS.map(product => (
                    <li key={product.id}>
                        <Link to={product.id} relative="">{product.title}</Link>
                    </li>
                ))}
            </ul >
        </>
    )
}

export default ProductsPage
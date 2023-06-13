import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('/products')
    }

    return (
        <>
            <div>Home</div>
            <Link to="products" />

            <button onClick={navigateHandler}>Navigate</button>
        </>
    )
}

export default Home
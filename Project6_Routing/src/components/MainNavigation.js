import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    return (<header>
        <nav>
            <ul className={classes.list}>
                <li><NavLink end to="/" className={({ isActive }) => isActive ? classes.active : undefined}>Home</NavLink></li>
                <li><NavLink to="/products" className={({ isActive }) => isActive ? classes.active : undefined}>Product</NavLink></li>
            </ul>
        </nav>
    </header>
    )
}

export default MainNavigation
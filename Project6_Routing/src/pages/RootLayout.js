import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

const RootLayout = () => {
    return (
        <>
            <h1>RootLayout</h1>
            <MainNavigation />
            <Outlet />
        </>
    )
}

export default RootLayout
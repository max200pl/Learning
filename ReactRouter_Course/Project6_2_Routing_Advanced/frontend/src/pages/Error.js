import React from 'react'
import PageContent from '../components/PageContent'
import { useRouteError } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
    const error = useRouteError(); // return object

    let title = "An error occurred!";
    let message = "An error occurred!";

    if (error.status === 500) {
        message = error.data.message;
    }

    if (error.status === 404) {
        title = "Not found!";
        message = "Couldn't find resource or page"
    }

    return <>
        <MainNavigation />
        <PageContent title={title} >
            <h3>{message}</h3>
        </PageContent>
    </>
}

export default ErrorPage
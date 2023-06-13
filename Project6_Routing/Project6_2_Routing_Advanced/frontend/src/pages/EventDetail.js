import React from 'react'
import { json, useRouteLoaderData } from 'react-router-dom'
import EventItem from '../components/EventItem'

const EventDetailPage = () => {
    const data = useRouteLoaderData("event-detail") //useLoaderData =>  if we added id: "event-id" needs use  useRouteLoaderData()

    return (
        <EventItem event={data.event} /> // event it's data from request handler react-router-dom
    )
}

export default EventDetailPage


export async function loader({ request, params }) { // react-router-dom pass object and this object contain 
    const id = await params.eventId;

    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
        throw json({ message: "Could not fetch details for selected event" }, {
            status: 500
        })
    } else {
        return response
    }
}
import React, { Suspense } from 'react'
import { Await, defer, json, redirect, useRouteLoaderData } from 'react-router-dom'
import EventItem from '../components/EventItem'
import EventsList from '../components/EventsList'

const EventDetailPage = () => {
    const { event, events } = useRouteLoaderData("event-detail") //useLoaderData =>  if we added id: "event-id" needs use  useRouteLoaderData()
    //  event, events -> two deferred requests
    return (
        <>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={event}>
                    {
                        (loadEvent) => <EventItem event={loadEvent} /> // event it's data from request handler react-router-dom
                    }
                </Await>
            </Suspense>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading....</p>}>
                <Await resolve={events}>
                    {
                        (loadEvents) => <EventsList events={loadEvents} />
                    }

                </Await>
            </Suspense>
        </>
    )
}

export default EventDetailPage

async function loadEvent(id) {
    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
        throw json({ message: "Could not fetch details for selected event" }, {
            status: 500
        })
    } else {
        const resData = await response.json();
        return resData.event;
    }
}

async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');

    //1 мы можем самостоятельно создать этот объект  new Response()
    // new Response('any data', { status: 201 });
    //2 fetch event возвращает Response from server и мы можем просто вернуть Response  

    if (!response.ok) {
        // return { isError: true, message: "Could not fetch events" }

        // throw { message: "Could not fetch events" }; // это ошибка будет подыматься по дереву до рута 

        // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
        //     status: 500, // something went wrong in the server response
        // })

        throw json( // convert json automaticity 
            { message: "Could not fetch events." },
            { status: 500 }
        )
    } else {
        //const resData = await response.json();
        // return resData.events;

        //const res = new Response('any data', { status: 201 }); // custom Response action
        //return res;  

        //return response; // if not use defer 

        const resData = await response.json()
        return resData.events;
    }
}


export async function loader({ request, params }) { // react-router-dom pass object and this object contain 
    const id = params.eventId;

    return defer({
        event: await loadEvent(id), // await your switch when loading complete show whole component if loading complete
        events: loadEvents()
    })
}

export async function action({ params, request }) {
    const eventID = params.eventId;
    const response = fetch('http://localhost:8080/events/' + eventID, {
        method: request.method,
    });

    if (!response.ok) {
        throw json({ message: "Could not delete event." }, {
            status: 500
        })
    }

    return redirect('/events')
}
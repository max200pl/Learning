import { Await, defer, json, useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';
import { Suspense } from 'react';

function EventsPage() {
    const { events } = useLoaderData(); // return defer obj
    // const events = data.events; // if not use defer huk 

    // if (data.isError) {
    //     return <p>{data.message}</p>
    // }

    return (
        <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading</p>}> {/* Пока едет загрузка показываем другие компоненты  */}
            <Await resolve={events}>
                {
                    (loadedEvents) => <EventsList events={loadedEvents} />
                }
            </Await>
        </Suspense>
    );
}

export default EventsPage;

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

export function loader() {
    return defer({ // отложенное показать разметку 
        events: loadEvents(),
    })
}
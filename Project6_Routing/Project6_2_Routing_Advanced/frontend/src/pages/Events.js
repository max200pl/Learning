import { json, useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
    const data = useLoaderData();
    const events = data.events;

    // if (data.isError) {
    //     return <p>{data.message}</p>
    // }

    return (
        <>
            <EventsList events={events} />
        </>
    );
}

export default EventsPage;


export async function loader() {
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

        //const res = new Response('any data', { status: 201 });
        //return res;

        return response
    }
}
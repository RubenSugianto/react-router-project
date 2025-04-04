import { useLoaderData, Await } from 'react-router-dom';

import EventsList from '../components/EventsList';
import { Suspense } from 'react';

function EventsPage() {
    // const data = useLoaderData();
    // const events = data.events;

    // return <EventsList events={events} />;

    // if (data.isError) {
    //     return <div>Error: {data.message}</div>;
    // }

    const {events} = useLoaderData();

    return (
        <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents} />}
            </Await>
        </Suspense>
    
    );
}

export default EventsPage;

async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // return { isError: true, message: 'Could not fetch events.'}
        throw new Response(JSON.stringify({ message: 'Could not fetch events.'}), {
            status: 500,
        });

        // kalo pake json (react router version 6 kebawah)
        // return json (
        //     { message : 'Could not fetch events.'},
        //     {
        //         status: 500,
        //     }
        // );
    } else {
        // return response;
        const resData = await response.json();
        return resData.events;
    }
}

export function loader() {
    return {
        events: loadEvents(),
    };
}
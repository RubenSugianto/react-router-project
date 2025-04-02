import { useLoaderData, json } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
    const data = useLoaderData();
    const events = data.events;

    // if (data.isError) {
    //     return <div>Error: {data.message}</div>;
    // }

    return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
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
        return response;
    }
}
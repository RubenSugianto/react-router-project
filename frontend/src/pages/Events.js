import { useLoaderData } from 'react-router-dom';

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
    const response = await fetch('http://localhost:8080/event');

    if (!response.ok) {
        // return { isError: true, message: 'Could not fetch events.'}
        throw { message: 'Could not fetch events.' };
    } else {
        return response;
    }
}
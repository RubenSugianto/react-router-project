import { Outlet, useLoaderData } from "react-router-dom";

import MainNavigation from '../components/MainNavigation';

function RootLayout() {
    // const events = useLoaderData();
    // console.log(events);
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;
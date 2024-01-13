import { createBrowserRouter, RouterProvider } from "react-router-dom";

// landing page
import LandingPage from "../components/landing_page/LandingPage";

// client
import ClientPage from "../components/client_page/ClientPage";
import Dashboard from "../components/client_page/pages/dashboard/DashboardPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "client",
        element: <ClientPage />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />,
            },
        ],
    },
]);

export const RouteComponents = () => {
    return <RouterProvider router={routes} />;
};

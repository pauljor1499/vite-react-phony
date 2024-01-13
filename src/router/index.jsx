import { createBrowserRouter, RouterProvider } from "react-router-dom";

// landing page
import LandingPage from "../components/landing_page/LandingPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
]);

export const RouteComponents = () => {
    return <RouterProvider router={routes} />;
};

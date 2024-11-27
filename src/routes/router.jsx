import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../pages/Login";
import Error from "../pages/Login";
import Register from "../pages/Register";
import AdventureDetails from "../layouts/AdventureDetails";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        loader: () => {
            return fetch("https://raw.githubusercontent.com/nafisahnubah/json/refs/heads/main/eco-adventure.json")
            .then(res => res.json())
        }
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "/adventure-details",
        element: (
            <PrivateRoute>
                <AdventureDetails></AdventureDetails>
            </PrivateRoute>
        )
    },
    {
        path: "/*",
        element: <Error></Error>
    },
    {
        path: "/profile",
        element: (
            <PrivateRoute>
                <Profile></Profile>
            </PrivateRoute>
        )
    }
]);

export default router;
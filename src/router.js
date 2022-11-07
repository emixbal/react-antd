import Home from "./pages/Home"
import AuthLogin from "./pages/AuthLogin"
import AuthRegister from "./pages/AuthRegister"
import ErrorPage from "./pages/error-page";

export const myRouters = [
    {
        path: "/",
        errorElement: <ErrorPage />,
        children: [
            {
                label: "Home",
                path: "",
                element: <Home />,
                children: "",
            },
            {
                label: "Home",
                path: "home",
                element: <Home />,
                children: "",
            },
            {
                label: "Home2",
                path: "/home2",
                element: <Home />,
                children: "",
            },
            {
                label: "Users",
                path: "users",
                element: <Home />,
                children: [
                    {
                        label: "Menu Users 1",
                        path: "users_menu_1",
                        element: <Home />,
                    },
                    {
                        label: "Menu Users 2",
                        path: "users_menu_2",
                        element: <Home />,
                    },
                ],
            },
            {
                label: "Team",
                path: "team",
                element: <Home />,
                children: "",
            }
        ]
    },
    {
        path: "Login",
        element: <AuthLogin />,
        children: "",
    },
    {
        path: "Register",
        element: <AuthRegister />,
        children: "",
    }
];


export const myAuthRouters = [

]
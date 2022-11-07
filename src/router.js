import {
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';

import Home from "./pages/Home"
import AuthLogin from "./pages/AuthLogin"
import AuthRegister from "./pages/AuthRegister"

export const myRouters = [
    {
        label: "Home",
        key: "home",
        path: "home",
        element: <Home />,
        icon: <PieChartOutlined />,
        children: "",
    },
    {
        label: "Home2",
        key: "home2",
        path: "/home2",
        element: <div>home2</div>,
        icon: <PieChartOutlined />,
        children: "",
    },
    {
        label: "Users",
        key: "users",
        path: "users",
        element: <Home />,
        icon: <UserOutlined />,
        children: [
            {
                label: "Menu Users 1",
                key: "users_menu_1",
                path: "users_menu_1",
                element: <Home />,
            },
            {
                label: "Menu Users 2",
                key: "users_menu_2",
                path: "users_menu_2",
                element: <Home />,
            },
        ],
    },
    {
        label: "Team",
        key: "team",
        path: "team",
        element: <Home />,
        icon: <PieChartOutlined />,
        children: "",
    },
    {
        label: "Login",
        key: "login",
        path: "login",
        element: <AuthLogin />,
        children: "",
    },
    {
        label: "Register",
        key: "register",
        path: "register",
        element: <AuthRegister />,
        children: "",
    },
];


export const myAuthRouters = [
    
]
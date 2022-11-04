import {
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';

import Home from "./pages/Home"

export const items = [
    {
        label: "Home",
        key: "home",
        element: <Home />,
        icon: <PieChartOutlined />,
        children: "",
    },
    {
        label: "Home",
        key: "",
        element: <Home />,
        icon: <PieChartOutlined />,
        children: "",
    },
    {
        label: "Users",
        key: "users",
        element: <Home />,
        icon: <UserOutlined />,
        children: [
            {
                label: "Menu Users 1",
                key: "users_menu_1",
                element: <Home />,
            },
            {
                label: "Menu Users 2",
                key: "users_menu_2",
                element: <Home />,
            },
        ],
    },
    {
        label: "Team",
        key: "team",
        element: <Home />,
        icon: <PieChartOutlined />,
        children: "",
    },
];

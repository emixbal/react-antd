import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Breadcrumb, Layout, Menu } from 'antd';
import {
    LogoutOutlined,
} from '@ant-design/icons';

import { items } from "./menuItems";
import { getAccessToken, removeToken } from "../library/userAuth";

const { Header, Content, Sider } = Layout;

const App = (props) => {
    const { children } = props
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const [paths, setPaths] = useState([]);

    useEffect(() => {
        let paths = window.location.pathname.split('/').filter(function (value) {
            return value !== "";
        });
        setPaths(paths)

        const accessToken = getAccessToken();
        if (!accessToken) {
            navigate("/login")
        }

    }, [navigate]);

    const handleLogout = () => {
        removeToken()
        window.location.reload();
    }

    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                    <div className="logo" />
                    <Menu
                        theme="dark" defaultSelectedKeys={paths} mode="inline" items={items}
                        onSelect={({ selectedKeys }) => navigate(`/${selectedKeys[0]}`)}
                    />
                    <Menu
                        onSelect={()=>handleLogout()}
                        theme="dark" mode="inline"
                        items={[{
                            label: "Logout",
                            key: "logout",
                            icon: <LogoutOutlined />,
                            children: ""
                        }]}
                    />
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            {
                                paths.map((item, index) => {
                                    return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
                                })
                            }
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <main>
                                {children}
                            </main>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </>

    );
};

export default App;
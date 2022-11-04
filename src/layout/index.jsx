import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { myRouters } from "../router";

import { Breadcrumb, Layout, Menu } from 'antd';

const { Header, Content, Sider } = Layout;

const App = (props) => {
    const { children } = props
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const [paths, setPaths] = useState([]);

    useEffect(() => {
        var paths = window.location.pathname.split('/').filter(function (value) {
            return value !== "";
        });
        setPaths(paths)
    }, []);

    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                    <div className="logo" />
                    <Menu
                        theme="dark" defaultSelectedKeys={paths} mode="inline" items={myRouters}
                        onSelect={({ selectedKeys }) => navigate(`/${selectedKeys[0]}`)}
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
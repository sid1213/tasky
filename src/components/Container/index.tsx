import React, { useState } from "react";
import {
  BellOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, Typography } from "antd";

import Style from "./index.module.scss";
import ContentBox from "../ContentBox/Index";

const { Sider, Content } = Layout;
const { Title } = Typography;
const Container: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout className={Style.Container}>
      <Sider
        trigger={
          <Button
            type="text"
            icon={collapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className={Style.triggerBtn}
          />
        }
        collapsible
        collapsed={collapsed}
      >
        <Title level={2} color={"white"} className={Style.Title}>
          T
        </Title>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Dashboard",
            },
            {
              key: "2",
              icon: <BellOutlined />,
              label: "Notification",
              disabled: true,
            },
            {
              key: "3",
              icon: <SettingOutlined />,
              label: "Setting",
              disabled: true,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Content className={Style.Content}>
          <ContentBox />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Container;

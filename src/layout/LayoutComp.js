import React from "react";
import { Layout, Menu } from "antd";
import styles from './layoutcomp.module.css'

const LayoutComp = () => {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <Header className={ styles.header } style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu  mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item className={ styles.menuItem } key="1">Home</Menu.Item>
          <Menu.Item className={ styles.menuItem } key="2">Buy</Menu.Item>
          <Menu.Item className={ styles.menuItem } key="3">Logout</Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        E-commerce created by The GODS!
      </Footer>
    </Layout>
  );
};

export default LayoutComp;

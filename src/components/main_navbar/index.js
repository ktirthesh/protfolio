import React from 'react';
import { Layout, Menu } from 'antd';

const { Header ,Footer} = Layout;

const items1 = ['Contact'].map((key) => ({
  key,
  label: `${key}`,
}));

const MainNavbar = (props) => {

  return (
    <Layout>
      {/* <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent:"flex-end"
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          items={items1}
          onClick={()=>props.onClick()}
          style={{
            flex: 1,
            minWidth: 0,
            justifyContent:"center"
          }}
        />
      </Header> */}
      {props.children}
      
      <Footer style={{ textAlign: 'right' }}>
          portfolio ©{new Date().getFullYear()} Created by Tirthesh Karande
        </Footer>
        
    </Layout>
  );
};
export default MainNavbar;
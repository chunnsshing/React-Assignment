import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import AppMainheader from './components/common/mainheader';
import AppFooter from './components/common/footer';

import UserListing from './views/UserListing';
import UserDetails from './components/details/userDetails';

import {Layout, theme } from 'antd';
const { Header, Content, Footer } = Layout;
const App = () => {
  const {
    // eslint-disable-next-line
    token: { },
  } = theme.useToken(); 
  return (
  <Layout className="mainLayout">
    <Router>
      <Header>
        <AppMainheader/>
      </Header>
      <Content style={{ padding: '0 50px',}}>
        <Routes>
            <Route path="/" element={<UserListing/>} />
            <Route path="/user/:userId" element={<UserDetails/>} />
            <Route>404 Not Found!</Route>
        </Routes>
      </Content>
      <Footer style={{ textAlign: 'left',}}>
        <AppFooter/>
      </Footer>
    </Router>
  </Layout>
  );
}
export default App;
import React from 'react';

import { Layout, Typography, Space } from 'antd';
import { Switch, Route, Link } from 'react-router-dom';

import './App.css';

import {
  Navbar,
  Home,
  Cryptocurrencies,
  Exchange,
  News,
  CryptoDetails,
} from './components';

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/crypto" component={Cryptocurrencies} />
              <Route path="/crypto/:uuid" component={CryptoDetails} />
              <Route path="/exchange" component={Exchange} />
              <Route path="/news" component={News} />
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: 'white', textAlign: 'center' }}
          >
            Crypto Currency <br />
            All right reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchange">Exchange</Link>
            <Link to="news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;

import React from 'react';

import { Button, Typography, Menu, Avatar } from 'antd';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';

import icon from '../images/cryptocurrency.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={3} className="logo">
          <Link to="/">Crypto Currency</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark">
        <Menu.Item key={1} icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key={2} icon={<FundOutlined />}>
          <Link to="/crypto">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item key={3} icon={<MoneyCollectOutlined />}>
          <Link to="/exchange">Exchange</Link>
        </Menu.Item>
        <Menu.Item key={4} icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;

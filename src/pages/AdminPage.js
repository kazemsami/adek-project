import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import { Image, Layout, Menu, Typography } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import Dashboard from './Dashboard';
import Jobs from './Jobs';
import Application from './Applications';
import Message from './Message';
import Statistics from './Statistics';

const { Header, Sider } = Layout;

class AdminPage extends React.Component {
	constructor(props)
	{
		super(props);
		this.state = {
			collapsed: false,
			pageTitle: 'Dashboard'
		}
		window.addEventListener("resize", (e) => this.handleResize(e));
		this.handleResize = (width) => {
			if (window.innerWidth < 700 && !this.state.collapsed)
				this.toggle()
			else if (window.innerWidth >= 700 && this.state.collapsed)
				this.toggle()
		}
	}

  titles = [ 'NULL', 'Dashboard', 'Search jobs', 'Applications', 'Message', 'Statistics' ]

  handleClick = (e) => {
	this.setState({
		pageTitle: this.titles[e.key]
	});
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <Layout className="full-screen">
        <Sider width={251} className='light-bg' trigger={null} collapsible collapsed={this.state.collapsed}>
			<div className='logo'>
				<Image src='./logo.png' />
			</div>
			<div style={{margin: this.state.collapsed ? 10 : 25}} className='profile'>
				<div className='profile-pic'></div>
				{!this.state.collapsed && <div className='profile-info'>
					<h3>Kazem</h3>
					<p>Superadmin</p>
				</div>}
			</div>
			<Menu
				onClick={this.handleClick}
				className='menu-fix'
				theme="light"
				mode="inline"
				defaultSelectedKeys={['1']}
			>
				<Menu.Item key='1'>
					<UserOutlined />
					<span>Dashboard</span>
					<Link to='/'></Link>
				</Menu.Item>
				<Menu.Item key='2'>
					<UserOutlined />
					<span>Search Job</span>
					<Link to='/jobs'></Link>
				</Menu.Item>
				<Menu.Item key='3'>
					<UserOutlined />
					<span>Applications</span>
					<Link to='/applications'></Link>
				</Menu.Item>
				<Menu.Item key='4'>
					<UserOutlined />
					<span>Message</span>
					<Link to='/message'></Link>
				</Menu.Item>
				<Menu.Item key='5'>
					<UserOutlined />
					<span>Statistics</span>
					<Link to='/statistics'></Link>
				</Menu.Item>
			</Menu>
        </Sider>
        <Layout className="site-layout">
			<Header className="header-bg" style={{ padding: 0 }}>
				{React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
				className: 'trigger',
				onClick: this.toggle,
				})}
				<Typography.Title style={{margin: 13}} level={3}>{this.state.pageTitle}</Typography.Title>
				<div className='search-wrapper'>
					<SearchOutlined className='search-icon'/>
					<input className='search-box'/>
				</div>
			</Header>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/jobs" element={<Jobs />} />
				<Route path="/applications" element={<Application />} />
				<Route path="/message" element={<Message />} />
				<Route path="/statistics" element={<Statistics />} />
			</Routes>
        </Layout>
      </Layout>
    );
  }
}

export default AdminPage;
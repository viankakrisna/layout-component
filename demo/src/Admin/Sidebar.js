import React from 'react';
import { Sidebar } from '../../../src/Sidebar';
import menu from './menu';
import * as md from 'react-icons/lib/md';

const renderMenu = menu => (
	<ul>
		{menu.map((item, index) => (
			<li key={index}>
				{item.name ? React.createElement(md[item.icon] || md.MdAdb) : null}
				{item.name ? <a href={item.url || '#'}>{item.name}</a> : null}
				{item.heading ? <h4>{item.heading}</h4> : null}
				{item.children ? renderMenu(item.children) : null}
			</li>
		))}
	</ul>
);

const AdminSidebar = props => (
	<Sidebar>
		{renderMenu(props.menu)}
	</Sidebar>
);

AdminSidebar.defaultProps = {
	menu,
};

export default AdminSidebar;

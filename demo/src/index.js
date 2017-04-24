import React from 'react';
import styled from 'styled-components';
import menu from './menu';
import { render } from 'react-dom';
import * as md from 'react-icons/lib/md';
import {
	Header,
	Logo,
	SearchBar,
	Avatar,
	MenuButton,
	Menu,
} from '../../src/Header';
import { Sidebar } from '../../src/Sidebar';
import { Layout } from '../../src/Layout';
import { Main, MainHeader, MainContent } from '../../src/Main';
import { Padding, Box, FlexColumn, theme } from '../../src';
import { ThemeProvider } from 'styled-components';

const AppHeader = props => (
	<Header>
		<FlexColumn>
			<MenuButton />
		</FlexColumn>
		<FlexColumn flex={1}>
			<Logo>
				Layout Component
			</Logo>
		</FlexColumn>
		<FlexColumn>
			<Menu />
			<Menu />
			<Menu />
			<Menu />
			<Menu />
		</FlexColumn>
		<FlexColumn>
			<SearchBar />
		</FlexColumn>
		<FlexColumn>
			<Avatar />
		</FlexColumn>
	</Header>
);

const renderMenu = menu => (
	<ul>
		{menu.map((item, index) => (
			<li key={index}>
				{item.name ? React.createElement(md[item.icon] || md.MdAdb) : null}
				{item.name ? <a href="#">{item.name}</a> : null}
				{item.heading ? <h4>{item.heading}</h4> : null}
				{item.children ? renderMenu(item.children) : null}
			</li>
		))}
	</ul>
);

const AppSidebar = props => (
	<Sidebar>
		{renderMenu(props.menu)}
	</Sidebar>
);

AppSidebar.defaultProps = {
	menu,
};

const AppMain = props => (
	<Main>
		<MainHeader>
			Test
		</MainHeader>
		<MainContent>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem, veniam cumque fuga quasi, in sint pariatur at reprehenderit asperiores esse nulla placeat? Repellat perferendis voluptatibus nobis libero expedita ex.
		</MainContent>
	</Main>
);
const App = props => (
	<ThemeProvider theme={theme}>
		<Layout>
			<AppHeader />
			<AppSidebar />
			<AppMain />
		</Layout>
	</ThemeProvider>
);

render(<App />, document.querySelector('#demo'));

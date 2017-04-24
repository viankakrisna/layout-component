import React from 'react';
import { Padding, Box, FlexColumn, theme } from '../../../src';

import {
	Header,
	Logo,
	SearchBar,
	Avatar,
	MenuButton,
	Menu,
} from '../../../src/Header';

export const AdminHeader = props => (
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

export default AdminHeader;

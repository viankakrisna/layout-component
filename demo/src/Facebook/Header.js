import React from 'react';
import { Padding, Box, FlexColumn, Container, theme } from '../../../src';

import { Header, Logo, Avatar, MenuButton, Menu } from '../../../src/Header';
import {
	SearchBarInput,
	SearchBarInputButton,
	SearchBarWrapper,
} from '../../../src/Header/SearchBar';

export const AdminHeader = props => (
	<Header fixed>
		<Container>
			<FlexColumn>
				<Logo>
					FB
				</Logo>
			</FlexColumn>
			<FlexColumn flex={'0 0 448px'}>
				<SearchBarWrapper>
					<SearchBarInput value={'Search Facebook'} />
					<SearchBarInputButton />
				</SearchBarWrapper>
			</FlexColumn>
			<FlexColumn flex={1} />
			<FlexColumn>
				<Menu />
				<Menu />
				<Menu />
				<Menu />
				<Menu />
			</FlexColumn>

			<FlexColumn>
				<Avatar />
			</FlexColumn>
		</Container>
	</Header>
);

export default AdminHeader;

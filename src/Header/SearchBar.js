import React from 'react';
import styled from 'styled-components';
import Search from 'react-icons/lib/md/search';

const SearchBarWrapper = styled.div`
	display: flex;
	flex: 0 0 15em;
	border-radius: 2px;
	background: rgba(255,255,255,0.25);
`;

const SearchBarInput = styled.input`
	line-height: 36px;
	border: 0;
	padding: 0 16px;
	color: ${props => props.theme.color.primaryText};
	transition: 250ms;
	font-size: 16px;
	box-sizing: border-box;
	background: transparent;
	flex: 1;
	&:focus {
		outline: none;
	}
	&.focus {
		color: black;
		background: ${props => props.theme.color.focusedSearchBarInputBg || 'white'};
	}
`;

const SearchBarInputButton = styled.button`
	line-height: 36px;
	border: 0;
	padding: 0 16px;
	color: ${props => props.theme.color.primaryText};
	transition: 250ms;
	background: transparent;
	font-size: 16px;
	box-sizing: border-box;
	&:focus {
		outline: none;
	}
	&.focus {
		color: black;
		background: ${props => props.theme.color.primaryText};
		outline: none;
	}
`;

export const SearchBar = () => (
	<SearchBarWrapper>
		<SearchBarInputButton />
		<SearchBarInput />
	</SearchBarWrapper>
);

SearchBarInput.defaultProps = {
	value: 'Search',
	onChange: e => null,
};

SearchBarInputButton.defaultProps = {
	children: <Search />,
};
export default SearchBar;

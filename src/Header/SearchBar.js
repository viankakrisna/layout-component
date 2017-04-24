import React from 'react';
import styled from 'styled-components';
import Search from 'react-icons/lib/md/search';

export const SearchBarWrapper = styled.div`
	display: flex;
	flex: 0 0 ${props => props.theme.baseFontSize * 15};
	border-radius: 2px;
	overflow: hidden;
	background: rgba(255,255,255,0.25);
`;

export const SearchBarInput = styled.input`
	line-height: ${props => props.theme.headerInnerHeight};
	border: 0;
	padding: 0 ${props => props.theme.baseFontSize};
	transition: 250ms;
	font-size: ${props => props.theme.baseFontSize};
	box-sizing: border-box;
	background: ${props => props.theme.color.headerSearchBar || 'transparent'};
	color: ${props => props.theme.color.headerSearchBarText || props.theme.color.primaryText};
	flex: 1;
	&:focus {
		outline: none;
	}
	&.focus {
		color: black;
		background: ${props => props.theme.color.focusedSearchBarInputBg || 'white'};
	}
`;

export const SearchBarInputButton = styled.button`
	line-height: ${props => props.theme.headerInnerHeight};
	border: 0;
	padding: 0 ${props => props.theme.baseFontSize};
	color: ${props => props.theme.color.primaryText};
	transition: 250ms;
	background: transparent;
	font-size: ${props => props.theme.baseFontSize};
	box-sizing: border-box;
	cursor: pointer;
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

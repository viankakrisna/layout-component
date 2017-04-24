import React from 'react';
import styled from 'styled-components';
import Menu from 'react-icons/lib/md/menu';

export const MenuButton = styled.a`
	border: 0;
	font-size: 1em;
	display: inline-block;
	line-height: ${props => props.theme.headerHeight};
	color: ${props => props.theme.color.primaryText};
	padding: 0;
	padding: 0 1em;
	cursor: pointer;
	align-content: center;
	transition: 250ms;
	border-bottom: 2px solid transparent;
	&:active {
		border-bottom: 2px solid rgba(255,255,255,1);
		outline: none;
	}
	&:hover,
	&:focus {
		border-bottom: 2px solid rgba(255,255,255,1);
		outline: none;
	}
	flex: 0 0 auto;
`;
MenuButton.defaultProps = {
	children: 'Link',
};
export default MenuButton;

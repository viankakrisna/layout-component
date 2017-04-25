import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Menu = styled(Link)`
	border: 0;
	font-size: ${props => props.theme.baseFontSize};
	display: inline-flex;
	line-height: ${props => props.theme.headerHeight};
	color: ${props => props.theme.color.primaryText};
	padding: 0;
	padding: 0 1em;
	cursor: pointer;
	align-content: center;
	transition: 250ms;
	border-bottom: 2px solid transparent;
	text-decoration: none;
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
Menu.defaultProps = {
	to: '/',
	children: 'Link',
};
export default Menu;

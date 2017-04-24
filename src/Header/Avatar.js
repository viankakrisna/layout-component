import React from 'react';
import styled from 'styled-components';
export const Avatar = styled.div`
	font-size: 22px;
	line-height: 64px;
	color: ${props => props.theme.color.primaryText};
	font-family: sans-serif;
	padding: 0;
	border-radius: 50%;
	width: ${props => props.theme.headerInnerHeight};
	height: ${props => props.theme.headerInnerHeight};
	background: rgba(255,255,255,0.25);
	cursor: pointer;
	border: 0;
`;

export default Avatar;

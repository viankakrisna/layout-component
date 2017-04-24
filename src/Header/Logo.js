import styled from 'styled-components';
export const Logo = styled.div`
	font-size: 22px;
	line-height: 36px;
	color: ${props => props.theme.color.primaryText};
	font-family: sans-serif;
	overflow: hidden;
	text-oveflow: ellipsis;
	${props => props.theme.color.primaryText}-space: nowrap;
	flex: 1;
`;
export default Logo;

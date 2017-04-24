import styled from 'styled-components';

export const Layout = styled.div`
	padding-top: ${props => props.theme.headerHeight};
	display: flex;
	flex-wrap: wrap;
	align-item: flex-start;
	background: #eee;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;

export default Layout;

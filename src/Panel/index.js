import styled, { css } from 'styled-components';

export const PanelHeading = styled.div`
	display: flex;
	flex: 0 0 100%;
	padding: ${props => props.theme.halfFontSize};
	background: #f6f7f9;
	border: ${props => props.theme.border.panel || 'none'};
	${props => (props.theme.borderColor.panel ? css`borderColor: ${props.theme.borderColor.panel}` : 'inherit')};
	margin-bottom: -1px;
`;

export const Panel = styled.div`
	display: flex;
	flex: 0 0 100%;
	padding: ${props => props.theme.baseFontSize};
	background: ${props => props.theme.color.panel || 'white'};
	border: ${props => props.theme.border.panel || 'none'};
	${props => (props.theme.borderColor.panel ? css`borderColor: ${props.theme.borderColor.panel}` : 'inherit')};
	color: ${props => props.theme.color.panelText || 'black'};
	margin-bottom: ${props => props.theme.baseFontSize};
`;

export default Panel;
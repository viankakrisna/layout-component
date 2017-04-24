import React from 'react';
import styled, { injectGlobal, css } from 'styled-components';

export { default as theme } from './theme';

injectGlobal`
	* {
		box-sizing: border-box;
	}
	body {
		margin: 0;
		padding: 0;
		font-family: sans-serif;
	}
`;

export class FullHeight extends React.Component {
	state = {
		height: window.innerHeight,
	};
	calculateHeight = e => window.innerHeight;

	componentDidMount() {
		this.calculateHeight();
		window.addEventListener('resize', this.calculateHeight);
	}
	render() {
		return (
			<div style={{ minHeight: this.state.height, ...this.props.style }}>
				{this.props.children}
			</div>
		);
	}
}

export const Box = styled(props => (
	<div className={props.className}>
		<div>
			{props.children}
		</div>
	</div>
))`
	${props => (props.ar ? css`&:before {
		content: '';
		display: block;
		padding-top: ${props => props.ar * 100}%;
	}
	position: relative;
	> div {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}` : '')}
	${props => (props.textAlign ? css`
		text-align: ${props.textAlign};
		` : '')}
`;

export const Padding = styled.div`
	padding: ${props => props.padding};
	padding: ${props => [props.top, props.right, props.bottom, props.left]
		.map(e => String(e || 0) + (Number.isInteger(e) ? 'px' : ''))
		.join(' ')};
	padding: ${props => String(props.all) + (Number.isInteger(props.all) ? 'px' : '')};

`;

export const FlexGrid = styled.div`
	padding-left: 0.5em;
	padding-right: 0.5em;
`;

export const FlexRow = styled.div`
	display: flex;
	alignItems: ${props => props.alignItems || 'center'};
	margin-left: -0.5em;
	margin-right: -0.5em;
`;

export const FlexColumn = styled.div`
	flex: ${props => props.flex || '0 0 auto'};
	padding-left: 0.5em;
	padding-right: 0.5em;
`;

import React from 'react';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
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
	&:before {
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
	}
`;

export const Column = styled.div`
  flex: ${props => props.flex || 1} ${props => props.xs * 100 || 100}%;
  width: ${props => props.xs * 100 || 100}%;

  @media (min-width: 768px){
    flex: ${props => props.flex || 1} ${props => (props.sm || props.xs) * 100 || 100}%;
    width: ${props => (props.sm || props.xs) * 100 || 100}%;
  }

  @media (min-width: 992px){
    flex: ${props => props.flex || 1} ${props => (props.md || props.sm) * 100 || 100}%;
    width: ${props => (props.md || props.sm) * 100 || 100}%;
  }

  @media (min-width: 1200px){
    flex: ${props => props.flex || 1} ${props => (props.lg || props.md) * 100 || 100}%;
    width: ${props => (props.lg || props.md) * 100 || 100}%;
  }

`;

export const Col = Column;

export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const Grid = styled.div`
  width: 100%;
  max-width: ${props => (props.fluid ? '100%' : '1160px')};
  margin: auto;
  box-sizing: border-box;
`;

export const Padding = styled.div`
	padding: ${props => props.padding};
	padding: ${props => String(props.all) + (Number.isInteger(props.all) ? 'px' : '')};
	padding: ${props => [props.top, props.right, props.bottom, props.left].map(e => String(e) + (Number.isInteger(e) ? 'px' : ''))}
`;

export default Grid;

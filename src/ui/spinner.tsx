import React, { PureComponent } from 'react';
import Styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }

  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
`;

interface SpinnerContainerProps {
  width: number;
}

const SpinnerContainer = Styled.div<SpinnerContainerProps>`
  position: relative;
  margin: 0 auto;
 width: ${props => props.width}px;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

const CircleContainer = Styled.svg`
  animation: ${rotate} 2s linear infinite;
  transform-origin: center center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const Circle = Styled.circle`
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke: rgb(251, 74, 190);
  animation: ${dash} 1.5s ease-in-out infinite;
  stroke-linecap: round;
`;

interface SpinnerProps {
  size: 'sm' | 'md' | 'lg';
  strokeWidth: number;
}

interface SpinnerState {}

export default class Spinner extends PureComponent<SpinnerProps, SpinnerState> {
  public static defaultProps = {
    strokeWidth: 2,
  };

  getSize(): number {
    switch (this.props.size) {
      case 'lg':
        return 75;
      case 'sm':
        return 25;
      case 'md':
      default:
        return 50;
    }
  }

  render() {
    return (
      <SpinnerContainer width={this.getSize()}>
        <CircleContainer viewBox="25 25 50 50">
          <Circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth={this.props.strokeWidth} strokeMiterlimit="10" />
        </CircleContainer>
      </SpinnerContainer>
    );
  }
}

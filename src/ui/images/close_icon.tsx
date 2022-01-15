import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Icon from './svg';

const Svg = styled(Icon)`
  width: 24px;
  height: 24px;
`;

interface CloseIconProps {
  className?: string;
  onClick: () => void;
}

export default class CloseIcon extends PureComponent<CloseIconProps> {
  render(): JSX.Element {
    const { className, onClick } = this.props;

    return (
      <Svg className={className} onClick={onClick} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <rect x="-53.91" y="194.45" width="621.13" height="121.79" rx="12" ry="12" transform="translate(255.73 -106.7) rotate(45)" />
        <rect x="-53.91" y="194.45" width="621.13" height="121.79" rx="12" ry="12" transform="translate(618.7 254.41) rotate(135)" />
      </Svg>
    );
  }
}

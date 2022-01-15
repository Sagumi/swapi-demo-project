import Styled from 'styled-components';
import CloseIcon from '../images/close_icon';

const CloseButton = Styled(CloseIcon)<any>`
  fill: #e2bf4b;
  position: absolute;
  right: 0;
  cursor: pointer;
  
  &:hover {
    fill: #af8d1d;
  }
  
  &:active {
    fill: #e0bb42;
  }
`;

export default CloseButton;

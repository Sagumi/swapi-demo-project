import React, { PureComponent } from 'react';
import Styled from 'styled-components';

interface InfoDisplayProps {
  className?: string;
  title?: string;
  text?: string;
}

interface InfoDisplayState {
}

const Container = Styled.div`
  width: 20%;
  margin: 5px;
  padding: 5px;
  color: #c9b264;
  
  > div {
    &:first-of-type {
    }

    &:last-of-type {
      margin-left: 20px;
      border: 1px solid #c9b264;
      margin-top: 5px;
      padding: 2px 5px;
      border-radius: 3px;
    }
  }
`;

export default class InfoDisplay extends PureComponent<InfoDisplayProps, InfoDisplayState> {

  render(): JSX.Element {
    const { text, title, className } = this.props;

    return (
      <Container className={className}>
        <div>{title}</div>
        <div>{text}</div>
      </Container>
    );
  }
}

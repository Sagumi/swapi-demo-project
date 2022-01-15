import React, { PureComponent } from 'react';
import Styled from 'styled-components';
import People from '../models/people';

interface PilotDisplayProps {
  model: People;
  isSelected: boolean;
  selectionCallback: (pilot: People) => void;
}

interface PilotDisplayState {
}

const Container = Styled.div<{ Selected: boolean }>`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 0 5px 5px 5px;
  padding: 5px;
  color: #c9b264;
  border: 1px solid #c9b264;
  cursor: pointer;
  background: ${props => props.Selected ? '#26282a' : 'transparent'};
  white-space: nowrap;
  pointer-events: ${props => props.Selected ? 'none' : 'all'};
  transition: all 100ms ease;
  
  &:hover {
    color: #9f8738;
    border-color: #9f8738;
  }
`;

export default class PilotDisplay extends PureComponent<PilotDisplayProps, PilotDisplayState> {
  constructor(props: PilotDisplayProps) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(): void {
    const { selectionCallback, model } = this.props;
    selectionCallback(model);
  }

  render(): JSX.Element {
    const { isSelected, model } = this.props;

    return (
      <Container onClick={this.handleClick} Selected={isSelected}>
        {model.Name}
      </Container>
    );
  }
}

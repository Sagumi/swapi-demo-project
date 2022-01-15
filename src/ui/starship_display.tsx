import React, { PureComponent } from 'react';
import Styled from 'styled-components';
import StarshipModel from '../models/starship';
import Starship from '../models/starship';

interface StarshipDisplayProps {
  model: StarshipModel;
  isSelected: boolean;
  shipSelectionCallback: (ship: Starship) => void;
}

interface StarshipDisplayState {
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
  border: 1px solid #c9b264;
  cursor: pointer;
  background: ${props => props.Selected ? '#26282a' : 'transparent'};
  white-space: nowrap;
  color: #c9b264;
  pointer-events: ${props => props.Selected ? 'none' : 'all'};
  transition: all 100ms ease;

  &:hover {
    color: #9f8738;
    border-color: #9f8738;
  }
`;

export default class Starship_display extends PureComponent<StarshipDisplayProps, StarshipDisplayState> {
  constructor(props: StarshipDisplayProps) {
    super(props);

    this.handleCardClick = this.handleCardClick.bind(this);
  }

  handleCardClick(): void {
    const { shipSelectionCallback, model, isSelected } = this.props;

    if (!isSelected) {
      shipSelectionCallback(model);
    }
  }

  render(): JSX.Element {
    const { Name } = this.props.model;
    return (
      <Container onClick={this.handleCardClick} Selected={this.props.isSelected}>
        <div>{Name}</div>
      </Container>
    );
  }
}

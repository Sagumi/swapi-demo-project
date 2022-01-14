import React, { PureComponent } from 'react';
import Styled from 'styled-components';
import StarshipModel from '../models/starship';
import AppController from '../controller/app_controller';

interface StarshipProps {
  model: StarshipModel;
  controller: AppController;
  isSelected: boolean;
}

interface StarshipState {
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
  border: 1px solid black;
  cursor: pointer;
  background: ${props => props.Selected ? '#cecece' : 'transparent'};
  white-space: nowrap;
`;

export default class Starship extends PureComponent<StarshipProps, StarshipState> {
  constructor(props: StarshipProps) {
    super(props);

    this.handleCardClick = this.handleCardClick.bind(this);
  }

  handleCardClick(): void {
    const { controller, model } = this.props;
    controller.selectStarship(model);
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

import React, { PureComponent } from 'react';
import Styled from 'styled-components';
import Fleet from '../models/fleet';
import Starship from '../models/starship';
import StarshipCard from './starship';
import AppController from '../controller/app_controller';

interface HSPageProps {
  shipList: Array<Starship>;
  controller: AppController;
}

interface HSPageState {
}

const Container = Styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export default class ShipMenu extends PureComponent<HSPageProps, HSPageState> {
  render(): JSX.Element {
    const starshipToDisplay = this.props.shipList.map(ship => (
        <StarshipCard
          key={ship.UUID}
          model={ship}
          controller={this.props.controller}
          isSelected={ship === this.props.controller.SelectedStarship}
        />
      ),
    );

    return (
      <Container>
        {starshipToDisplay}
      </Container>
    );
  }
}

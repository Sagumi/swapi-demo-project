import React, { PureComponent } from 'react';
import Styled from 'styled-components';
import Starship from '../models/starship';
import StarshipDisplay from './starship_display';

interface HSPageProps {
  shipList: Array<Starship>;
  selectedShip: Starship | null;
  shipSelectionCallback: (ship: Starship) => void;
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
    const { shipList, selectedShip, shipSelectionCallback } = this.props;

    const starshipToDisplay = shipList.map(ship => (
        <StarshipDisplay
          key={ship.UUID}
          model={ship}
          isSelected={ship === selectedShip}
          shipSelectionCallback={shipSelectionCallback}
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

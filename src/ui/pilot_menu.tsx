import React, { PureComponent } from 'react';
import Styled from 'styled-components';
import People from '../models/people';
import PilotDisplay from './pilot_display';

interface PilotMenuProps {
  pilotList: Array<People>;
  selectedPilot: People | null;
  pilotSelectionCallback: (pilot: People) => void;
}

interface PilotMenuState {
}

interface ContainerProps {
  containsElements: boolean;
}

const Container = Styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: ${props => props.containsElements ? '250px' : '0px'};
  transition: all 300ms ease;
  white-space: nowrap;
  overflow: hidden;
}
`;

const MenuTitle = Styled.h3`
  color: #c9b264;
`;

export default class PilotMenu extends PureComponent<PilotMenuProps, PilotMenuState> {
  render(): JSX.Element {
    const { pilotList, selectedPilot, pilotSelectionCallback } = this.props;

    const pilotsToDisplay = pilotList.map(pilot => (
        <PilotDisplay
          key={pilot.UUID}
          model={pilot}
          isSelected={pilot === selectedPilot}
          selectionCallback={pilotSelectionCallback}
        />
      ),
    );

    return (
      <Container containsElements={pilotList.length > 0}>
        <MenuTitle>Known Pilots</MenuTitle>
        {pilotsToDisplay}
      </Container>
    );
  }
}

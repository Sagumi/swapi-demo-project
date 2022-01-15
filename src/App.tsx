import React, { Component, Fragment } from 'react';
import Styled from 'styled-components';
import Starship from './models/starship';
import ShipMenu from './ui/ship_menu';
import Spinner from './ui/spinner';
import AppController from './controller/app_controller';
import PilotMenu from './ui/pilot_menu';
import People from './models/people';
import ShipDetail from './ui/ship_detail';
import PilotDetail from './ui/pilot_detail';

interface AppProps {}

interface AppState {
  shipList: Array<Starship>;
  isLoaded: boolean;
  selectedShip: Starship | null;
  selectedPilot: People | null;
}

const Container = Styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #303338;
`;

const Content = Styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 80%;
  margin: auto;
`;

const Filler = Styled.div`
  flex: 9;
`;

const PilotContainer = Styled.div`
  display: flex;
  flex-direction: row;
`;

export default class App extends Component<AppProps, AppState> {
  private _controller: AppController;

  constructor(props: AppProps) {
    super(props);

    this.handleShipSelected = this.handleShipSelected.bind(this);
    this.clearShipSelection = this.clearShipSelection.bind(this);
    this.handlePilotSelected = this.handlePilotSelected.bind(this);
    this.clearPilotSelection = this.clearPilotSelection.bind(this);

    this._controller = new AppController();

    this.state = {
      shipList: [],
      isLoaded: false,
      selectedShip: null,
      selectedPilot: null,
    };
  }

  async componentDidMount(): Promise<void> {
    const initialTime = Date.now();

    await this._controller.initialDataLoad();

    const finalTime = Date.now();
    console.log(`#### Loaded in: ${(finalTime - initialTime) / 1000} s`);

    this.setState({
      shipList: [...this._controller.Fleet.Ships],
      isLoaded: true,
    });
  }

  handleShipSelected(ship: Starship): void {
    this.setState({ selectedShip: ship });
  }

  clearShipSelection(): void {
    this.clearPilotSelection();
    this.setState({ selectedShip: null });
  }

  handlePilotSelected(pilot: People): void {
    this.setState({ selectedPilot: pilot });
  }

  clearPilotSelection(): void {
    this.setState({ selectedPilot: null });
  }

  render() {
    const { shipList, isLoaded, selectedShip, selectedPilot } = this.state;

    let content = <Spinner size={'lg'} />;

    if (isLoaded) {
      content = (
        <Fragment>
          <ShipMenu
            shipList={shipList}
            selectedShip={selectedShip}
            shipSelectionCallback={this.handleShipSelected}
          />
          <ShipDetail model={selectedShip} closeCallback={this.clearShipSelection} />
          <PilotContainer>
            <PilotMenu pilotList={selectedShip?.PilotList || []} pilotSelectionCallback={this.handlePilotSelected} selectedPilot={selectedPilot} />
            <PilotDetail model={selectedPilot} closeCallback={this.clearPilotSelection} />
          </PilotContainer>
          <Filler />
        </Fragment>
      );
    }

    return (
      <Container>
        <Content>
          {content}
        </Content>
      </Container>
    );
  }
}

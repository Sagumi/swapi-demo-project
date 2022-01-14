import React, { Fragment, PureComponent } from 'react';
import Styled from 'styled-components';
import Swapi, { StarshipSchema } from './tools/swapi';
import Fleet from './models/fleet';
import Starship from './models/starship';
import ShipMenu from './ui/ship_menu';
import Spinner from './ui/spinner';
import TestData from './test_data';
import AppController from './controller/app_controller';

interface AppProps {}

interface AppState {
  shipList: Array<Starship>;
  isLoaded: boolean;
}

const Container = Styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 80%;
  margin: auto;
`;

const Filler = Styled.div`
  flex: 9;
`;

export default class App extends PureComponent<AppProps, AppState> {
  private _controller: AppController;

  constructor(props: AppProps) {
    super(props);

    this._controller = new AppController();

    this.state = {
      shipList: [],
      isLoaded: false,
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

  render() {
    const { shipList, isLoaded } = this.state;

    let content = <Spinner size={'lg'} />;

    if (isLoaded) {
      content = (
        <Fragment>
          <ShipMenu shipList={shipList} controller={this._controller} />
          <Filler />
        </Fragment>
      );
    }

    return (
      <Container>
        {content}
      </Container>
    );
  }
}

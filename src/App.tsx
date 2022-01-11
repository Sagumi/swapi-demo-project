import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import Swapi from './tools/swapi';
import Fleet from './fleet/fleet';
import Starship from './fleet/starship';

interface AppProps {}

interface AppState {
  shipList: Array<Starship>;
}

export default class App extends PureComponent<AppProps, AppState> {
  private _fleet: Fleet = new Fleet();

  constructor(props: AppProps) {
    super(props);

    this.state = {
      shipList: [...this._fleet.Ships],
    };
  }

  async componentDidMount(): Promise<void> {
    const initialTime = Date.now();

    const shipList = await Swapi.fetchShips();

    for (const ship of shipList) {
      await this._fleet.addShip(ship);
    }

    const finalTime = Date.now();
    console.log(`#### Delta T: ${(finalTime - initialTime) / 1000} s`);

    this.setState({ shipList: [...this._fleet.Ships] });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {JSON.stringify(this.state.shipList, null, 2)}
          </a>
        </header>
      </div>
    );
  }
}

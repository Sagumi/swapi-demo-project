import Fleet from './fleet';
import Starship from './starship';
import People from './people';

export default class AppModel {
  private _fleet: Fleet = new Fleet();
  private _selectedShip: Starship | null = null;
  private _selectedPilot: People | null = null;

  get Fleet(): Fleet {
    return this._fleet;
  }

  get SelectedShip(): Starship | null {
    return this._selectedShip;
  }

  set SelectedShip(value: Starship | null) {
    this._selectedShip = value;
  }

  get SelectedPilot(): People | null {
    return this._selectedPilot;
  }

  set SelectedPilot(value: People | null) {
    this._selectedPilot = value;
  }
}

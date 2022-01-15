import Fleet from '../models/fleet';
import AppModel from '../models/app_model';
import Starship from '../models/starship';
import People from '../models/people';
import Swapi from '../tools/swapi';

export default class AppController {
  private _appModel = new AppModel();

  get Fleet(): Fleet {
    return this._appModel.Fleet;
  }

  get SelectedStarship(): Starship | null {
    return this._appModel.SelectedShip;
  }

  get SelectedPilot(): People | null {
    return this._appModel.SelectedPilot;
  }

  async initialDataLoad(): Promise<void> {
    const shipList = await Swapi.fetchShips();

    for (const ship of shipList) {
      await this.Fleet.addShip(ship);
    }

    this._appModel.Fleet.sortShips();
  }

  selectStarship(starship: Starship): void {
    this.clearPilotSelection();
    this._appModel.SelectedShip = starship;
  }

  selectPilot(pilot: People): void {
    if (this._appModel.SelectedShip?.PilotList.includes(pilot))
      this._appModel.SelectedPilot = pilot;
  }

  clearPilotSelection(): void {
    this._appModel.SelectedPilot = null;
  }

  clearStarshipSelection(): void {
    this.clearPilotSelection();
    this._appModel.SelectedShip = null;
  }
}

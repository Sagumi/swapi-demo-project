import Fleet from '../models/fleet';
import AppModel from '../models/app_model';
import Swapi from '../tools/swapi';

export default class AppController {
  private _appModel = new AppModel();

  get Fleet(): Fleet {
    return this._appModel.Fleet;
  }

  async initialDataLoad(): Promise<void> {
    const shipList = await Swapi.fetchShips();

    for (const ship of shipList) {
      await this.Fleet.addShip(ship);
    }

    this._appModel.Fleet.sortShips();
  }
}

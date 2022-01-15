import Fleet from './fleet';

export default class AppModel {
  private _fleet: Fleet = new Fleet();

  get Fleet(): Fleet {
    return this._fleet;
  }
}

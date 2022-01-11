import Swapi, { StarshipSchema } from '../tools/swapi';
import Starship from './starship';
import People from './people';

export default class Fleet {
  private _fleet: Array<Starship> = [];

  get Ships(): Array<Starship> {
    return this._fleet;
  }

  async addShip(schema: StarshipSchema): Promise<void> {
    const newStarship: Starship = new Starship(schema);
    newStarship.PilotList = (await Swapi.fetchShipPilotList(schema)).map(peopleSchema => new People(peopleSchema));
    this._fleet.push(newStarship);
  }
}

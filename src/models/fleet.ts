import Swapi, { StarshipSchema } from '../tools/swapi';
import Starship from './starship';
import People from './people';

export default class Fleet {
  private _fleet: Array<Starship> = [];

  get Ships(): Array<Starship> {
    return this._fleet;
  }

  sortShips(): void {
    this._fleet = this._fleet.sort(this.sortByShipName);
  }

  async addShip(schema: StarshipSchema): Promise<void> {
    const newStarship: Starship = new Starship(schema);
    // newStarship.PilotList = (await Swapi.fetchShipPilotList(schema)).map(peopleSchema => new People(peopleSchema));
    this._fleet.push(newStarship);
  }

  private sortByShipClass(ship1: Starship, ship2: Starship): number {
    if (ship1.StarshipClass > ship2.StarshipClass) return 1;
    if (ship1.StarshipClass < ship2.StarshipClass) return -1;
    return 0;
  }

  private sortByShipName(ship1: Starship, ship2: Starship): number {
    if (ship1.Name > ship2.Name) return 1;
    if (ship1.Name < ship2.Name) return -1;
    return 0;
  }
}

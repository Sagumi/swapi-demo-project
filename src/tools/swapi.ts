export interface StarshipSchema {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  films: Array<string>;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: Array<string>;
  starship_class: string;
  url: string;
}

export interface PeopleSchema {
  birth_year: string,
  eye_color: string,
  gender: string,
  hair_color: string,
  height: string,
  homeworld: string,
  mass: string,
  name: string,
  skin_color: string,
  created: string,
  edited: string,
  url: string,
  films: Array<string>,
  species: Array<string>,
  starships: Array<string>,
  vehicles: Array<string>,
}

export interface FilmSchema {
  created: string,
  director: string,
  edited: string,
  episode_id: string,
  opening_crawl: string,
  producer: string,
  release_date: string,
  title: string,
  url: string,
  characters: Array<string>,
  planets: Array<string>,
  species: Array<string>,
  starships: Array<string>,
  vehicles: Array<string>,
}

type RequestAnswerResult = StarshipSchema | PeopleSchema | FilmSchema;

interface RequestAnswer {
  count: number;
  next: string | null,
  previous: string | null,
  results: Array<RequestAnswerResult>,
}

export default class Swapi {
  private static readonly BaseUrl = 'https://swapi.dev/api/';

  static async fetchShips(): Promise<Array<StarshipSchema>> {
    return <Array<StarshipSchema>>await Swapi.fetchDataRecursively(`${this.BaseUrl}starships`);
  }

  static async fetchShipPilotList(starship: StarshipSchema): Promise<Array<PeopleSchema>> {
    const arr: Array<PeopleSchema> = [];

    const promiseArray: Array<Promise<void>> = [];

    for (const pilotLink of starship.pilots) {
      promiseArray.push(new Promise<void>(async resolve => {
        const answer = <PeopleSchema>await Swapi.fetchDataWithID(pilotLink);
        arr.push(answer);
        resolve();
      }));
    }

    await Promise.all(promiseArray);

    return arr;
  }

  private static async fetchDataRecursively(url: string): Promise<Array<RequestAnswerResult>> {
    let result: Array<StarshipSchema | PeopleSchema | FilmSchema> = [];
    let answer = await Swapi.fetchData(url);

    result = [...result, ...answer.results];

    while (answer.next) {
      answer = await Swapi.fetchData(answer.next);
      result = [...result, ...answer.results];
    }

    return result;
  }

  private static async fetchDataWithID(url: string): Promise<RequestAnswerResult> {
    if (!url.match(/\d+\/$/)) {
      throw new Error('Tried to fetch data with an ID, but the URL does not contain an ID. Use Swapi.fetchData instead.');
    }

    const response = await fetch(url);

    return response.json();
  }

  private static async fetchData(url: string): Promise<RequestAnswer> {
    console.count('#### Fetching data');
    const response = await fetch(url);

    return await response.json();
  }
}

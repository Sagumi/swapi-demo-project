import { PeopleSchema } from '../tools/swapi';

export default class People {
  private _birthYear: string;
  private _eyecolor: string;
  private _gender: string;
  private _hairColor: string;
  private _height: number;
  private _homeworldUrl: string;
  private _mass: number;
  private _name: string;
  private _skinColor: string;
  private _filmsUrlList: Array<string>;
  private _speciesUrlList: Array<string>;
  private _starshipsUrlList: Array<string>;
  private _vehiclesUrlList: Array<string>;

  constructor(schema: PeopleSchema) {
    const { films, eye_color, hair_color, skin_color, gender, height, name, homeworld, mass, species, birth_year, vehicles, starships } = schema;
    this._birthYear = birth_year;
    this._eyecolor = eye_color;
    this._gender = gender;
    this._hairColor = hair_color;
    this._height = Number(height);
    this._homeworldUrl = homeworld;
    this._mass = Number(mass);
    this._name = name;
    this._skinColor = skin_color;
    this._filmsUrlList = films;
    this._speciesUrlList = species;
    this._starshipsUrlList = starships;
    this._vehiclesUrlList = vehicles;
  }
}

import { v4 as uuidv4 } from 'uuid';
import { PeopleSchema } from '../tools/swapi';

export default class People {
  private _uuid: string = uuidv4();
  private _schemaBackup: PeopleSchema;
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
    this._schemaBackup = schema;
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

  get UUID(): string {
    return this._uuid;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get mass(): number {
    return this._mass;
  }

  set mass(value: number) {
    this._mass = value;
  }

  get skinColor(): string {
    return this._skinColor;
  }

  set skinColor(value: string) {
    this._skinColor = value;
  }

  get speciesUrlList(): Array<string> {
    return this._speciesUrlList;
  }

  set speciesUrlList(value: Array<string>) {
    this._speciesUrlList = value;
  }

  get birthYear(): string {
    return this._birthYear;
  }

  set birthYear(value: string) {
    this._birthYear = value;
  }

  get eyecolor(): string {
    return this._eyecolor;
  }

  set eyecolor(value: string) {
    this._eyecolor = value;
  }

  get hairColor(): string {
    return this._hairColor;
  }

  set hairColor(value: string) {
    this._hairColor = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }

  get homeworldUrl(): string {
    return this._homeworldUrl;
  }

  set homeworldUrl(value: string) {
    this._homeworldUrl = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get filmsUrlList(): Array<string> {
    return this._filmsUrlList;
  }

  set filmsUrlList(value: Array<string>) {
    this._filmsUrlList = value;
  }

  get starshipsUrlList(): Array<string> {
    return this._starshipsUrlList;
  }

  set starshipsUrlList(value: Array<string>) {
    this._starshipsUrlList = value;
  }

  get vehiclesUrlList(): Array<string> {
    return this._vehiclesUrlList;
  }

  set vehiclesUrlList(value: Array<string>) {
    this._vehiclesUrlList = value;
  }

  toJSON(): PeopleSchema {
    return this._schemaBackup;
  }
}

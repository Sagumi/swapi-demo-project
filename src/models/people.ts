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

  get Gender(): string {
    return this._gender;
  }

  set Gender(value: string) {
    this._gender = value;
  }

  get Mass(): number {
    return this._mass;
  }

  set Mass(value: number) {
    this._mass = value;
  }

  get SkinColor(): string {
    return this._skinColor;
  }

  set SkinColor(value: string) {
    this._skinColor = value;
  }

  get SpeciesUrlList(): Array<string> {
    return this._speciesUrlList;
  }

  set SpeciesUrlList(value: Array<string>) {
    this._speciesUrlList = value;
  }

  get BirthYear(): string {
    return this._birthYear;
  }

  set BirthYear(value: string) {
    this._birthYear = value;
  }

  get Eyecolor(): string {
    return this._eyecolor;
  }

  set Eyecolor(value: string) {
    this._eyecolor = value;
  }

  get HairColor(): string {
    return this._hairColor;
  }

  set HairColor(value: string) {
    this._hairColor = value;
  }

  get Height(): number {
    return this._height;
  }

  set Height(value: number) {
    this._height = value;
  }

  get HomeworldUrl(): string {
    return this._homeworldUrl;
  }

  set HomeworldUrl(value: string) {
    this._homeworldUrl = value;
  }

  get Name(): string {
    return this._name;
  }

  set Name(value: string) {
    this._name = value;
  }

  get FilmsUrlList(): Array<string> {
    return this._filmsUrlList;
  }

  set FilmsUrlList(value: Array<string>) {
    this._filmsUrlList = value;
  }

  get StarshipsUrlList(): Array<string> {
    return this._starshipsUrlList;
  }

  set StarshipsUrlList(value: Array<string>) {
    this._starshipsUrlList = value;
  }

  get VehiclesUrlList(): Array<string> {
    return this._vehiclesUrlList;
  }

  set VehiclesUrlList(value: Array<string>) {
    this._vehiclesUrlList = value;
  }

  toJSON(): PeopleSchema {
    return this._schemaBackup;
  }
}

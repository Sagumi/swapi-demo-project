import { v4 as uuidv4 } from 'uuid';
import { StarshipSchema } from '../tools/swapi';
import People from './people';

export default class Starship {
  private _uuid: string = uuidv4();
  private _schemaBackup: StarshipSchema;
  private _mglt: string;
  private _cargoCapacity: number;
  private _consumables: string;
  private _cost: number;
  private _crewCount: number;
  private _hyperdriveRating: number;
  private _length: number;
  private _manufacturer: string;
  private _maxAtmosphericSpeed: number;
  private _model: string;
  private _name: string;
  private _passengers: number;
  private _filmAddressList: Array<string>;
  private _pilotsAddressList: Array<string>;
  private _pilotList: Array<People> = [];
  private _starshipClass: string;

  constructor(schema: StarshipSchema) {
    const {
      consumables,
      starship_class,
      cost_in_credits,
      crew,
      created,
      edited,
      films,
      hyperdrive_rating,
      length,
      manufacturer,
      MGLT,
      max_atmosphering_speed,
      model,
      name,
      passengers,
      url,
      pilots,
      cargo_capacity,
    } = schema;

    this._schemaBackup = schema;

    this._consumables = consumables;
    this._mglt = MGLT;
    this._cargoCapacity = Number(cargo_capacity);
    this._cost = Number(cost_in_credits);
    this._crewCount = Number(crew);
    this._hyperdriveRating = Number(hyperdrive_rating);
    this._length = Number(length);
    this._manufacturer = manufacturer;
    this._maxAtmosphericSpeed = Number(max_atmosphering_speed);
    this._model = model;
    this._name = name;
    this._passengers = Number(passengers);
    this._filmAddressList = films;
    this._pilotsAddressList = pilots;
    this._starshipClass = starship_class;
  }

  get UUID(): string {
    return this._uuid;
  }

  get MGLT(): string {
    return this._mglt;
  }

  set MGLT(value: string) {
    this._mglt = value;
  }

  get CargoCapacity(): number {
    return this._cargoCapacity;
  }

  set CargoCapacity(value: number) {
    this._cargoCapacity = value;
  }

  get Consumables(): string {
    return this._consumables;
  }

  set Consumables(value: string) {
    this._consumables = value;
  }

  get Cost(): number {
    return this._cost;
  }

  set Cost(value: number) {
    this._cost = value;
  }

  get CrewCount(): number {
    return this._crewCount;
  }

  set CrewCount(value: number) {
    this._crewCount = value;
  }

  get HyperdriveRating(): number {
    return this._hyperdriveRating;
  }

  set HyperdriveRating(value: number) {
    this._hyperdriveRating = value;
  }

  get Length(): number {
    return this._length;
  }

  set Length(value: number) {
    this._length = value;
  }

  get Manufacturer(): string {
    return this._manufacturer;
  }

  set Manufacturer(value: string) {
    this._manufacturer = value;
  }

  get MaxAtmosphericSpeed(): number {
    return this._maxAtmosphericSpeed;
  }

  set MaxAtmosphericSpeed(value: number) {
    this._maxAtmosphericSpeed = value;
  }

  get Model(): string {
    return this._model;
  }

  set Model(value: string) {
    this._model = value;
  }

  get Name(): string {
    return this._name;
  }

  set Name(value: string) {
    this._name = value;
  }

  get Passengers(): number {
    return this._passengers;
  }

  set Passengers(value: number) {
    this._passengers = value;
  }

  get FilmAddressList(): Array<string> {
    return this._filmAddressList;
  }

  set FilmAddressList(value: Array<string>) {
    this._filmAddressList = value;
  }

  get PilotsAddressList(): Array<string> {
    return this._pilotsAddressList;
  }

  set PilotsAddressList(value: Array<string>) {
    this._pilotsAddressList = value;
  }

  get PilotList(): Array<People> {
    return this._pilotList;
  }

  set PilotList(value: Array<People>) {
    this._pilotList = value;
  }

  get StarshipClass(): string {
    return this._starshipClass;
  }

  set StarshipClass(value: string) {
    this._starshipClass = value;
  }

  toJSON(): StarshipSchema {
    return this._schemaBackup;
  }
}

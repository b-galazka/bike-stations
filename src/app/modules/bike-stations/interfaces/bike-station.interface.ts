import { BikeStationCoordinates } from '../types/bike-station-coordinates.type';

export interface IBikeStation {
  coordinates: BikeStationCoordinates;
  id: string;
  bikes: number;
  bikePlaces: number;
  name: string;
  distance: number | null;
}

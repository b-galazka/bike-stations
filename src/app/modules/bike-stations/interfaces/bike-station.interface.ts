import { LatLng } from 'leaflet';

export interface IBikeStation {
  coordinates: LatLng;
  id: string;
  bikes: number;
  bikePlaces: number;
  name: string;
  distance: number | null;
}

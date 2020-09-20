import { LatLng } from 'leaflet';

export interface IGeolocationState {
  currentPosition: LatLng | null;
}

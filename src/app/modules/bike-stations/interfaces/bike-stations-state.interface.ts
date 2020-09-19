import { IBikeStation } from './bike-station.interface';

export interface IBikeStationsState {
  areBikeStationsLoaded: boolean;
  bikeStations: IBikeStation[];
  selectedBikeStation: IBikeStation | null;
}

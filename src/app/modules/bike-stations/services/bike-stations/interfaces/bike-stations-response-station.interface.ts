import { IBikeStationsResponseStationGeometry } from './bike-stations-responose-station-geometry.interface';
import { IBikeStationsResponseStationProperties } from './bike-stations-responose-station-properties.interface';

export interface IBikeStationsResponseStation {
  geometry: IBikeStationsResponseStationGeometry;
  id: string;
  properties: IBikeStationsResponseStationProperties;
}

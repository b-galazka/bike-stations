import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { LatLng } from 'leaflet';

import { BikeStationComponent } from './bike-station.component';
import { DistanceUnitTranslationKeyPipe } from './pipes/distance-unit-translation-key.pipe';
import { DistancePipe } from './pipes/distance.pipe';

describe('BikeStationComponent', () => {
  let component: BikeStationComponent;
  let fixture: ComponentFixture<BikeStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BikeStationComponent, DistancePipe, DistanceUnitTranslationKeyPipe],
      imports: [TranslocoTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeStationComponent);
    component = fixture.componentInstance;

    component.bikeStation = {
      name: 'name',
      coordinates: new LatLng(1, 2),
      id: 'id',
      bikes: 1,
      bikePlaces: 1,
      distance: null
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

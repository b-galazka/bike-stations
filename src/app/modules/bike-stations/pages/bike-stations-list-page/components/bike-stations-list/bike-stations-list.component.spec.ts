import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';

import { BikeStationComponent } from '@bike-stations/components/bike-station/bike-station.component';
import { BikeStationsListComponent } from './bike-stations-list.component';

describe('BikeStationsListComponent', () => {
  let component: BikeStationsListComponent;
  let fixture: ComponentFixture<BikeStationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BikeStationsListComponent, MockComponent(BikeStationComponent)]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeStationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

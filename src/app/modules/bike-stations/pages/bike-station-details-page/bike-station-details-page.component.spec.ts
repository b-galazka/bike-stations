import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';

import { NavbarComponent } from '@bike-stations/components/navbar/navbar.component';
import { BikeStationDetailsPageComponent } from './bike-station-details-page.component';

describe('BikeStationDetailsPageComponent', () => {
  let component: BikeStationDetailsPageComponent;
  let fixture: ComponentFixture<BikeStationDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BikeStationDetailsPageComponent, MockComponent(NavbarComponent)]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeStationDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

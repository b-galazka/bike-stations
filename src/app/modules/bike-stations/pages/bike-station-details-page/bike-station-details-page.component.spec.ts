import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponent } from 'ng-mocks';

import { BikeStationComponent } from '@bike-stations/components/bike-station/bike-station.component';
import { NavbarComponent } from '@bike-stations/components/navbar/navbar.component';
import { BikeStationsService } from '@bike-stations/services/bike-stations/bike-stations.service';
import { getClassMethodsNames } from '@shared/utils/get-class-methods-names.util';
import { BikeStationDetailsPageComponent } from './bike-station-details-page.component';

describe('BikeStationDetailsPageComponent', () => {
  let component: BikeStationDetailsPageComponent;
  let fixture: ComponentFixture<BikeStationDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BikeStationDetailsPageComponent,
        MockComponent(NavbarComponent),
        MockComponent(BikeStationComponent)
      ],
      providers: [
        {
          provide: BikeStationsService,
          useValue: jasmine.createSpyObj(getClassMethodsNames(BikeStationsService))
        }
      ],
      imports: [RouterTestingModule]
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

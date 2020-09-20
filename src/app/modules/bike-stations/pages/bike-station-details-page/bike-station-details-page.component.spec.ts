import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';

import { BikeStationComponent } from '@bike-stations/components/bike-station/bike-station.component';
import { NavbarComponent } from '@bike-stations/components/navbar/navbar.component';
import { BikeStationsService } from '@bike-stations/services/bike-stations/bike-stations.service';
import { GeolocationService } from '@core/services/geolocation.service';
import { getClassMethodsNames } from '@shared/utils/get-class-methods-names.util';
import { BikeStationDetailsPageComponent } from './bike-station-details-page.component';
import { BikeStationsMapService } from './services/bike-stations-map.service';

describe('BikeStationDetailsPageComponent', () => {
  const geolocationServiceMock = {
    state: { currentPosition: null },
    state$: of({ currentPosition: null })
  };

  let component: BikeStationDetailsPageComponent;
  let fixture: ComponentFixture<BikeStationDetailsPageComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        BikeStationDetailsPageComponent,
        MockComponent(NavbarComponent),
        MockComponent(BikeStationComponent)
      ],
      providers: [
        {
          provide: BikeStationsService,
          useValue: jasmine.createSpyObj(getClassMethodsNames(BikeStationsService))
        },
        { provide: GeolocationService, useValue: geolocationServiceMock }
      ],
      imports: [RouterTestingModule]
    });

    TestBed.overrideComponent(BikeStationDetailsPageComponent, {
      set: {
        providers: [
          {
            provide: BikeStationsMapService,
            useValue: jasmine.createSpyObj(getClassMethodsNames(BikeStationsMapService))
          }
        ]
      }
    });

    await TestBed.compileComponents();
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

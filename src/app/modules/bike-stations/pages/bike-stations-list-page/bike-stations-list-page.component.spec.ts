import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';

import { NavbarComponent } from '@bike-stations/components/navbar/navbar.component';
import { BikeStationsService } from '@bike-stations/services/bike-stations/bike-stations.service';
import { getClassMethodsNames } from '@shared/utils/get-class-methods-names.util';
import { BikeStationsListPageComponent } from './bike-stations-list-page.component';

describe('BikeStationsListPageComponent', () => {
  let component: BikeStationsListPageComponent;
  let fixture: ComponentFixture<BikeStationsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BikeStationsListPageComponent, MockComponent(NavbarComponent)],
      providers: [
        {
          provide: BikeStationsService,
          useValue: jasmine.createSpyObj(getClassMethodsNames(BikeStationsService))
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeStationsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

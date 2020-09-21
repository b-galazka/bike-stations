import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';

import { NavbarComponent } from '@bike-stations/components/navbar/navbar.component';
import { BikeStationsStateService } from '@bike-stations/services/bike-stations/bike-stations-state.service';
import { getClassMethodsNames } from '@shared/utils/get-class-methods-names.util';
import { BikeStationsListPageComponent } from './bike-stations-list-page.component';
import { BikeStationsListComponent } from './components/bike-stations-list/bike-stations-list.component';

describe('BikeStationsListPageComponent', () => {
  let component: BikeStationsListPageComponent;
  let fixture: ComponentFixture<BikeStationsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BikeStationsListPageComponent,
        MockComponent(NavbarComponent),
        MockComponent(BikeStationsListComponent)
      ],
      providers: [
        {
          provide: BikeStationsStateService,
          useValue: jasmine.createSpyObj(getClassMethodsNames(BikeStationsStateService))
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

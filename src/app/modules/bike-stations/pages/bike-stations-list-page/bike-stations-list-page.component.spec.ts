import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';

import { NavbarComponent } from '@bike-stations/components/navbar/navbar.component';
import { BikeStationsListPageComponent } from './bike-stations-list-page.component';

describe('BikeStationsListPageComponent', () => {
  let component: BikeStationsListPageComponent;
  let fixture: ComponentFixture<BikeStationsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BikeStationsListPageComponent, MockComponent(NavbarComponent)]
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

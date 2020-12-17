import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismLicenseMenuComponent } from './tourism-license-menu.component';

describe('TourismLicenseMenuComponent', () => {
  let component: TourismLicenseMenuComponent;
  let fixture: ComponentFixture<TourismLicenseMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourismLicenseMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourismLicenseMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

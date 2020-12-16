import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismLicenseComponent } from './tourism-license.component';

describe('TourismLicenseComponent', () => {
  let component: TourismLicenseComponent;
  let fixture: ComponentFixture<TourismLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourismLicenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourismLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

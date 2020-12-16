import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismLicenseFooterComponent } from './tourism-license-footer.component';

describe('TourismLicenseFooterComponent', () => {
  let component: TourismLicenseFooterComponent;
  let fixture: ComponentFixture<TourismLicenseFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourismLicenseFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourismLicenseFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

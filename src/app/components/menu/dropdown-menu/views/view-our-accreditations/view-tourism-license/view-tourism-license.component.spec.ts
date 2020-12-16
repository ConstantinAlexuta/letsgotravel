import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTourismLicenseComponent } from './view-tourism-license.component';

describe('ViewTourismLicenseComponent', () => {
  let component: ViewTourismLicenseComponent;
  let fixture: ComponentFixture<ViewTourismLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTourismLicenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTourismLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

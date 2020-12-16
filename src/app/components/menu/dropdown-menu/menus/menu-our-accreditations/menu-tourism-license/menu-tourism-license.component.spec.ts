import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTourismLicenseComponent } from './menu-tourism-license.component';

describe('MenuTourismLicenseComponent', () => {
  let component: MenuTourismLicenseComponent;
  let fixture: ComponentFixture<MenuTourismLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTourismLicenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTourismLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFixedLogoComponent } from './navbar-fixed-logo.component';

describe('NavbarFixedLogoComponent', () => {
  let component: NavbarFixedLogoComponent;
  let fixture: ComponentFixture<NavbarFixedLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarFixedLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarFixedLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFixedLine1Dropdown1Component } from './navbar-fixed-line1-dropdown1.component';

describe('NavbarFixedLine1Dropdown1Component', () => {
  let component: NavbarFixedLine1Dropdown1Component;
  let fixture: ComponentFixture<NavbarFixedLine1Dropdown1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarFixedLine1Dropdown1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarFixedLine1Dropdown1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

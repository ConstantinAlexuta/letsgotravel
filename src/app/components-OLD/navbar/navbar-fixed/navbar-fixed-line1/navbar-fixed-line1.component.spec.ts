import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFixedLine1Component } from './navbar-fixed-line1.component';

describe('NavbarFixedLine1Component', () => {
  let component: NavbarFixedLine1Component;
  let fixture: ComponentFixture<NavbarFixedLine1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarFixedLine1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarFixedLine1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

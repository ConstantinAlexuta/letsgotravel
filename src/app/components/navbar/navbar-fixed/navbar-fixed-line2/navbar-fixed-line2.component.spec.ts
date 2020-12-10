import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFixedLine2Component } from './navbar-fixed-line2.component';

describe('NavbarFixedLine2Component', () => {
  let component: NavbarFixedLine2Component;
  let fixture: ComponentFixture<NavbarFixedLine2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarFixedLine2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarFixedLine2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

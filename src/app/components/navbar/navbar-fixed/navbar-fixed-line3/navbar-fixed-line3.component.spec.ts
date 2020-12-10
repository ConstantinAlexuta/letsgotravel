import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFixedLine3Component } from './navbar-fixed-line3.component';

describe('NavbarFixedLine3Component', () => {
  let component: NavbarFixedLine3Component;
  let fixture: ComponentFixture<NavbarFixedLine3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarFixedLine3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarFixedLine3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

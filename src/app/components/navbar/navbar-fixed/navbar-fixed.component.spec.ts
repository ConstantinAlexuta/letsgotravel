import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFixedComponent } from './navbar-fixed.component';

describe('NavbarFixedComponent', () => {
  let component: NavbarFixedComponent;
  let fixture: ComponentFixture<NavbarFixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarFixedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

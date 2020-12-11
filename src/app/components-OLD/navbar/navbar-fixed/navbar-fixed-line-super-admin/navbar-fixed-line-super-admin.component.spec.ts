import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFixedLineSuperAdminComponent } from './navbar-fixed-line-super-admin.component';

describe('NavbarFixedLineSuperAdminComponent', () => {
  let component: NavbarFixedLineSuperAdminComponent;
  let fixture: ComponentFixture<NavbarFixedLineSuperAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarFixedLineSuperAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarFixedLineSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

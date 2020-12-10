import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFixedLineAdminComponent } from './navbar-fixed-line-admin.component';

describe('NavbarFixedLineAdminComponent', () => {
  let component: NavbarFixedLineAdminComponent;
  let fixture: ComponentFixture<NavbarFixedLineAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarFixedLineAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarFixedLineAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

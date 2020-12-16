import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuReliableCompanyComponent } from './menu-reliable-company.component';

describe('MenuReliableCompanyComponent', () => {
  let component: MenuReliableCompanyComponent;
  let fixture: ComponentFixture<MenuReliableCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuReliableCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuReliableCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

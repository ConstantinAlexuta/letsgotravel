import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInsurancePolicyComponent } from './menu-insurance-policy.component';

describe('MenuInsurancePolicyComponent', () => {
  let component: MenuInsurancePolicyComponent;
  let fixture: ComponentFixture<MenuInsurancePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuInsurancePolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuInsurancePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

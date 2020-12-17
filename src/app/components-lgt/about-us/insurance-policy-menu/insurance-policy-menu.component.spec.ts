import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancePolicyMenuComponent } from './insurance-policy-menu.component';

describe('InsurancePolicyMenuComponent', () => {
  let component: InsurancePolicyMenuComponent;
  let fixture: ComponentFixture<InsurancePolicyMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancePolicyMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancePolicyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

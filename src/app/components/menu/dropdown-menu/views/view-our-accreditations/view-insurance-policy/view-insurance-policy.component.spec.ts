import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInsurancePolicyComponent } from './view-insurance-policy.component';

describe('ViewInsurancePolicyComponent', () => {
  let component: ViewInsurancePolicyComponent;
  let fixture: ComponentFixture<ViewInsurancePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInsurancePolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInsurancePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

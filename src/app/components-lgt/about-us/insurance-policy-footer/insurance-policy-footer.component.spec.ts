import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancePolicyFooterComponent } from './insurance-policy-footer.component';

describe('InsurancePolicyFooterComponent', () => {
  let component: InsurancePolicyFooterComponent;
  let fixture: ComponentFixture<InsurancePolicyFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancePolicyFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancePolicyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

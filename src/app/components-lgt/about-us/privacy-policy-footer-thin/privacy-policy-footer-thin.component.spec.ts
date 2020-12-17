import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyFooterThinComponent } from './privacy-policy-footer-thin.component';

describe('PrivacyPolicyFooterThinComponent', () => {
  let component: PrivacyPolicyFooterThinComponent;
  let fixture: ComponentFixture<PrivacyPolicyFooterThinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyPolicyFooterThinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPolicyFooterThinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

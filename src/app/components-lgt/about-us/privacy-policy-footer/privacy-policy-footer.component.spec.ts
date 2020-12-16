import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyFooterComponent } from './privacy-policy-footer.component';

describe('PrivacyPolicyFooterComponent', () => {
  let component: PrivacyPolicyFooterComponent;
  let fixture: ComponentFixture<PrivacyPolicyFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyPolicyFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPolicyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

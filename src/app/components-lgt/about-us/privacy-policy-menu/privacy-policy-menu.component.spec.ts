import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyMenuComponent } from './privacy-policy-menu.component';

describe('PrivacyPolicyMenuComponent', () => {
  let component: PrivacyPolicyMenuComponent;
  let fixture: ComponentFixture<PrivacyPolicyMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyPolicyMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPolicyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

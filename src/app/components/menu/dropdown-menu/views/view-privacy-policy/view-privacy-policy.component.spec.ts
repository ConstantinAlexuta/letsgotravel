import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPrivacyPolicyComponent } from './view-privacy-policy.component';

describe('ViewPrivacyPolicyComponent', () => {
  let component: ViewPrivacyPolicyComponent;
  let fixture: ComponentFixture<ViewPrivacyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPrivacyPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

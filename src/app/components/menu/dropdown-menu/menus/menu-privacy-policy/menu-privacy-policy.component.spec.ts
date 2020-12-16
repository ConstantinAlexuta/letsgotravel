import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrivacyPolicyComponent } from './menu-privacy-policy.component';

describe('MenuPrivacyPolicyComponent', () => {
  let component: MenuPrivacyPolicyComponent;
  let fixture: ComponentFixture<MenuPrivacyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPrivacyPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

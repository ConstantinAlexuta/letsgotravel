import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsSplitedForMobileMenuPhoneAndEmailTextOthersIconsComponent } from './icons-splited-for-mobile-menu-phone-and-email-text-others-icons.component';

describe('IconsSplitedForMobileMenuPhoneAndEmailTextOthersIconsComponent', () => {
  let component: IconsSplitedForMobileMenuPhoneAndEmailTextOthersIconsComponent;
  let fixture: ComponentFixture<IconsSplitedForMobileMenuPhoneAndEmailTextOthersIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsSplitedForMobileMenuPhoneAndEmailTextOthersIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsSplitedForMobileMenuPhoneAndEmailTextOthersIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

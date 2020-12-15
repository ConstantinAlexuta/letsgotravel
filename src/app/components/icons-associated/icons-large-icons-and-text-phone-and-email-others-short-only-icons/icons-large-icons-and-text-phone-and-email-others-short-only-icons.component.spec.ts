import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsLargeIconsAndTextPhoneAndEmailOthersShortOnlyIconsComponent } from './icons-large-icons-and-text-phone-and-email-others-short-only-icons.component';

describe('IconsLargeIconsAndTextPhoneAndEmailOthersShortOnlyIconsComponent', () => {
  let component: IconsLargeIconsAndTextPhoneAndEmailOthersShortOnlyIconsComponent;
  let fixture: ComponentFixture<IconsLargeIconsAndTextPhoneAndEmailOthersShortOnlyIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsLargeIconsAndTextPhoneAndEmailOthersShortOnlyIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsLargeIconsAndTextPhoneAndEmailOthersShortOnlyIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

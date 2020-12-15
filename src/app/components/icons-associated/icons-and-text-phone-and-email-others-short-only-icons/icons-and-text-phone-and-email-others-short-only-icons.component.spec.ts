import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsAndTextPhoneAndEmailOthersShortOnlyIconsComponent } from './icons-and-text-phone-and-email-others-short-only-icons.component';

describe('IconsAndTextPhoneAndEmailOthersShortOnlyIconsComponent', () => {
  let component: IconsAndTextPhoneAndEmailOthersShortOnlyIconsComponent;
  let fixture: ComponentFixture<IconsAndTextPhoneAndEmailOthersShortOnlyIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsAndTextPhoneAndEmailOthersShortOnlyIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsAndTextPhoneAndEmailOthersShortOnlyIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

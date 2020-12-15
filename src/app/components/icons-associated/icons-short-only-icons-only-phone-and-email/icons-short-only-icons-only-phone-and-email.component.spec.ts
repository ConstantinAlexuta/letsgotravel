import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsShortOnlyIconsOnlyPhoneAndEmailComponent } from './icons-short-only-icons-only-phone-and-email.component';

describe('IconsShortOnlyIconsOnlyPhoneAndEmailComponent', () => {
  let component: IconsShortOnlyIconsOnlyPhoneAndEmailComponent;
  let fixture: ComponentFixture<IconsShortOnlyIconsOnlyPhoneAndEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsShortOnlyIconsOnlyPhoneAndEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsShortOnlyIconsOnlyPhoneAndEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

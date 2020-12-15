import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsLargeIconsAndTextOnlyPhoneAndEmailComponent } from './icons-large-icons-and-text-only-phone-and-email.component';

describe('IconsLargeIconsAndTextOnlyPhoneAndEmailComponent', () => {
  let component: IconsLargeIconsAndTextOnlyPhoneAndEmailComponent;
  let fixture: ComponentFixture<IconsLargeIconsAndTextOnlyPhoneAndEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsLargeIconsAndTextOnlyPhoneAndEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsLargeIconsAndTextOnlyPhoneAndEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

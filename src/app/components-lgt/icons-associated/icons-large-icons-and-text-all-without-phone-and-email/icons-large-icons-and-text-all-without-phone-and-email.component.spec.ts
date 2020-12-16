import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsLargeIconsAndTextAllWithoutPhoneAndEmailComponent } from './icons-large-icons-and-text-all-without-phone-and-email.component';

describe('IconsLargeIconsAndTextAllWithoutPhoneAndEmailComponent', () => {
  let component: IconsLargeIconsAndTextAllWithoutPhoneAndEmailComponent;
  let fixture: ComponentFixture<IconsLargeIconsAndTextAllWithoutPhoneAndEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsLargeIconsAndTextAllWithoutPhoneAndEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsLargeIconsAndTextAllWithoutPhoneAndEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

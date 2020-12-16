import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsShortcutAllWithoutPhoneAndEmailComponent } from './icons-shortcut-all-without-phone-and-email.component';

describe('IconsShortcutAllWithoutPhoneAndEmailComponent', () => {
  let component: IconsShortcutAllWithoutPhoneAndEmailComponent;
  let fixture: ComponentFixture<IconsShortcutAllWithoutPhoneAndEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsShortcutAllWithoutPhoneAndEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsShortcutAllWithoutPhoneAndEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsAllShortOnlyPhoneEmailWhatsappComponent } from './icons-all-short-only-phone-email-whatsapp.component';

describe('IconsAllShortOnlyPhoneEmailWhatsappComponent', () => {
  let component: IconsAllShortOnlyPhoneEmailWhatsappComponent;
  let fixture: ComponentFixture<IconsAllShortOnlyPhoneEmailWhatsappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsAllShortOnlyPhoneEmailWhatsappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsAllShortOnlyPhoneEmailWhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

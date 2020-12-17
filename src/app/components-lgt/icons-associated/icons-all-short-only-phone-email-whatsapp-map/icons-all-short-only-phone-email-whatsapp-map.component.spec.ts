import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsAllShortOnlyPhoneEmailWhatsappMapComponent } from './icons-all-short-only-phone-email-whatsapp-map.component';

describe('IconsAllShortOnlyPhoneEmailWhatsappMapComponent', () => {
  let component: IconsAllShortOnlyPhoneEmailWhatsappMapComponent;
  let fixture: ComponentFixture<IconsAllShortOnlyPhoneEmailWhatsappMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsAllShortOnlyPhoneEmailWhatsappMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsAllShortOnlyPhoneEmailWhatsappMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

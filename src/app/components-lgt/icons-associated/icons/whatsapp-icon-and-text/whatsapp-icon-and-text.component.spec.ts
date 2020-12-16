import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappIconAndTextComponent } from './whatsapp-icon-and-text.component';

describe('WhatsappIconAndTextComponent', () => {
  let component: WhatsappIconAndTextComponent;
  let fixture: ComponentFixture<WhatsappIconAndTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsappIconAndTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsappIconAndTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

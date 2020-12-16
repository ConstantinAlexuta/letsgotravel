import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailIconAndTextComponent } from './email-icon-and-text.component';

describe('EmailIconAndTextComponent', () => {
  let component: EmailIconAndTextComponent;
  let fixture: ComponentFixture<EmailIconAndTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailIconAndTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailIconAndTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

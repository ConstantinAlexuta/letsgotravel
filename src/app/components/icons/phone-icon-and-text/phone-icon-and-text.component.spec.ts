import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneIconAndTextComponent } from './phone-icon-and-text.component';

describe('PhoneIconAndTextComponent', () => {
  let component: PhoneIconAndTextComponent;
  let fixture: ComponentFixture<PhoneIconAndTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneIconAndTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneIconAndTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

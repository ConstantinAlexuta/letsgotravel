import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFooterThinComponent } from './contact-footer-thin.component';

describe('ContactFooterThinComponent', () => {
  let component: ContactFooterThinComponent;
  let fixture: ComponentFixture<ContactFooterThinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFooterThinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFooterThinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

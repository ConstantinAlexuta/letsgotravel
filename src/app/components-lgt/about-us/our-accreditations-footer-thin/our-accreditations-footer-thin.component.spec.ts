import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAccreditationsFooterThinComponent } from './our-accreditations-footer-thin.component';

describe('OurAccreditationsFooterThinComponent', () => {
  let component: OurAccreditationsFooterThinComponent;
  let fixture: ComponentFixture<OurAccreditationsFooterThinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurAccreditationsFooterThinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurAccreditationsFooterThinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

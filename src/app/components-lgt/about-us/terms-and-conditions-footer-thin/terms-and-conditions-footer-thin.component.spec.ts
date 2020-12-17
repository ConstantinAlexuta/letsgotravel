import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAndConditionsFooterThinComponent } from './terms-and-conditions-footer-thin.component';

describe('TermsAndConditionsFooterThinComponent', () => {
  let component: TermsAndConditionsFooterThinComponent;
  let fixture: ComponentFixture<TermsAndConditionsFooterThinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsAndConditionsFooterThinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsAndConditionsFooterThinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

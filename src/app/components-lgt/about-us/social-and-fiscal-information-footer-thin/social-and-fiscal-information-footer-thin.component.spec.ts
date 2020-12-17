import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAndFiscalInformationFooterThinComponent } from './social-and-fiscal-information-footer-thin.component';

describe('SocialAndFiscalInformationFooterThinComponent', () => {
  let component: SocialAndFiscalInformationFooterThinComponent;
  let fixture: ComponentFixture<SocialAndFiscalInformationFooterThinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialAndFiscalInformationFooterThinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialAndFiscalInformationFooterThinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAndFiscalInformationFooterComponent } from './social-and-fiscal-information-footer.component';

describe('SocialAndFiscalInformationFooterComponent', () => {
  let component: SocialAndFiscalInformationFooterComponent;
  let fixture: ComponentFixture<SocialAndFiscalInformationFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialAndFiscalInformationFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialAndFiscalInformationFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

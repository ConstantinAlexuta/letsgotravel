import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAndFiscalInformationComponent } from './social-and-fiscal-information.component';

describe('SocialAndFiscalInformationComponent', () => {
  let component: SocialAndFiscalInformationComponent;
  let fixture: ComponentFixture<SocialAndFiscalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialAndFiscalInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialAndFiscalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

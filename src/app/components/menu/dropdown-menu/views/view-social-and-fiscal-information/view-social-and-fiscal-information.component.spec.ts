import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSocialAndFiscalInformationComponent } from './view-social-and-fiscal-information.component';

describe('ViewSocialAndFiscalInformationComponent', () => {
  let component: ViewSocialAndFiscalInformationComponent;
  let fixture: ComponentFixture<ViewSocialAndFiscalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSocialAndFiscalInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSocialAndFiscalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

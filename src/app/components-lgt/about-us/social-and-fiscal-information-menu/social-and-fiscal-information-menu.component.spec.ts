import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAndFiscalInformationMenuComponent } from './social-and-fiscal-information-menu.component';

describe('SocialAndFiscalInformationMenuComponent', () => {
  let component: SocialAndFiscalInformationMenuComponent;
  let fixture: ComponentFixture<SocialAndFiscalInformationMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialAndFiscalInformationMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialAndFiscalInformationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

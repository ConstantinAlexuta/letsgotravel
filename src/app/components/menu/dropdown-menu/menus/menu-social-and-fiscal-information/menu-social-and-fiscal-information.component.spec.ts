import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSocialAndFiscalInformationComponent } from './menu-social-and-fiscal-information.component';

describe('MenuSocialAndFiscalInformationComponent', () => {
  let component: MenuSocialAndFiscalInformationComponent;
  let fixture: ComponentFixture<MenuSocialAndFiscalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSocialAndFiscalInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSocialAndFiscalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

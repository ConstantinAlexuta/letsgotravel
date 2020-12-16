import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTermsAndConditionsComponent } from './menu-terms-and-conditions.component';

describe('MenuTermsAndConditionsComponent', () => {
  let component: MenuTermsAndConditionsComponent;
  let fixture: ComponentFixture<MenuTermsAndConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTermsAndConditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTermsAndConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

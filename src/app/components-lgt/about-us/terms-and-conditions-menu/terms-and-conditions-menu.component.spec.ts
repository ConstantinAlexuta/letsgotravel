import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAndConditionsMenuComponent } from './terms-and-conditions-menu.component';

describe('TermsAndConditionsMenuComponent', () => {
  let component: TermsAndConditionsMenuComponent;
  let fixture: ComponentFixture<TermsAndConditionsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsAndConditionsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsAndConditionsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTermsAndConditionsComponent } from './view-terms-and-conditions.component';

describe('ViewTermsAndConditionsComponent', () => {
  let component: ViewTermsAndConditionsComponent;
  let fixture: ComponentFixture<ViewTermsAndConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTermsAndConditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTermsAndConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAndConditionsFooterComponent } from './terms-and-conditions-footer.component';

describe('TermsAndConditionsFooterComponent', () => {
  let component: TermsAndConditionsFooterComponent;
  let fixture: ComponentFixture<TermsAndConditionsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsAndConditionsFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsAndConditionsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

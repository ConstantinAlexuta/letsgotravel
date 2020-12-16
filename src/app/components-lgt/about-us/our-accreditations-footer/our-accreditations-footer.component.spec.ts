import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAccreditationsFooterComponent } from './our-accreditations-footer.component';

describe('OurAccreditationsFooterComponent', () => {
  let component: OurAccreditationsFooterComponent;
  let fixture: ComponentFixture<OurAccreditationsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurAccreditationsFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurAccreditationsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

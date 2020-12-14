import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAccreditationsComponent } from './our-accreditations.component';

describe('OurAccreditationsComponent', () => {
  let component: OurAccreditationsComponent;
  let fixture: ComponentFixture<OurAccreditationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurAccreditationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurAccreditationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

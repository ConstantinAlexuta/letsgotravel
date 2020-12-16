import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOurAccreditationsComponent } from './view-our-accreditations.component';

describe('ViewOurAccreditationsComponent', () => {
  let component: ViewOurAccreditationsComponent;
  let fixture: ComponentFixture<ViewOurAccreditationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOurAccreditationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOurAccreditationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

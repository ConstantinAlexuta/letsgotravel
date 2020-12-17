import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAccreditationsMenuComponent } from './our-accreditations-menu.component';

describe('OurAccreditationsMenuComponent', () => {
  let component: OurAccreditationsMenuComponent;
  let fixture: ComponentFixture<OurAccreditationsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurAccreditationsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurAccreditationsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismPatentFooterThinComponent } from './tourism-patent-footer-thin.component';

describe('TourismPatentFooterThinComponent', () => {
  let component: TourismPatentFooterThinComponent;
  let fixture: ComponentFixture<TourismPatentFooterThinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourismPatentFooterThinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourismPatentFooterThinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

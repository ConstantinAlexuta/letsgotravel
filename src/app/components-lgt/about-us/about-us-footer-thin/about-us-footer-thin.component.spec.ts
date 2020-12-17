import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsFooterThinComponent } from './about-us-footer-thin.component';

describe('AboutUsFooterThinComponent', () => {
  let component: AboutUsFooterThinComponent;
  let fixture: ComponentFixture<AboutUsFooterThinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsFooterThinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsFooterThinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

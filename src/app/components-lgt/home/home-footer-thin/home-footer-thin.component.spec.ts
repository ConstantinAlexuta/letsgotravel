import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFooterThinComponent } from './home-footer-thin.component';

describe('HomeFooterThinComponent', () => {
  let component: HomeFooterThinComponent;
  let fixture: ComponentFixture<HomeFooterThinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFooterThinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFooterThinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

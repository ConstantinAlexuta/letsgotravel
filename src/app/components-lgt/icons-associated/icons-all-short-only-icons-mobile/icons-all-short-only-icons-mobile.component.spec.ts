import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsAllShortOnlyIconsMobileComponent } from './icons-all-short-only-icons-mobile.component';

describe('IconsAllShortOnlyIconsMobileComponent', () => {
  let component: IconsAllShortOnlyIconsMobileComponent;
  let fixture: ComponentFixture<IconsAllShortOnlyIconsMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsAllShortOnlyIconsMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsAllShortOnlyIconsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

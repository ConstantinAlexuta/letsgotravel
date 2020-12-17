import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSmallMobileComponent } from './logo-small-mobile.component';

describe('LogoSmallMobileComponent', () => {
  let component: LogoSmallMobileComponent;
  let fixture: ComponentFixture<LogoSmallMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoSmallMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoSmallMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

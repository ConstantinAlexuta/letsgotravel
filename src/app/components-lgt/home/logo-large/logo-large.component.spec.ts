import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoLargeComponent } from './logo-large.component';

describe('LogoLargeComponent', () => {
  let component: LogoLargeComponent;
  let fixture: ComponentFixture<LogoLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoLargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

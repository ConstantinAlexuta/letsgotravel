import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavbarMobileAndDesktopComponent } from './top-navbar-mobile-and-desktop.component';

describe('TopNavbarMobileAndDesktopComponent', () => {
  let component: TopNavbarMobileAndDesktopComponent;
  let fixture: ComponentFixture<TopNavbarMobileAndDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavbarMobileAndDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavbarMobileAndDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

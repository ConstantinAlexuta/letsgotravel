import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLeftNavbarMobileAndDesktopComponent } from './top-left-navbar-mobile-and-desktop.component';

describe('TopLeftNavbarMobileAndDesktopComponent', () => {
  let component: TopLeftNavbarMobileAndDesktopComponent;
  let fixture: ComponentFixture<TopLeftNavbarMobileAndDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopLeftNavbarMobileAndDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLeftNavbarMobileAndDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

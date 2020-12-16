import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLeftNavbarMobileAndDesktopCommonComponent } from './top-left-navbar-mobile-and-desktop-common.component';

describe('TopLeftNavbarMobileAndDesktopCommonComponent', () => {
  let component: TopLeftNavbarMobileAndDesktopCommonComponent;
  let fixture: ComponentFixture<TopLeftNavbarMobileAndDesktopCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopLeftNavbarMobileAndDesktopCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLeftNavbarMobileAndDesktopCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

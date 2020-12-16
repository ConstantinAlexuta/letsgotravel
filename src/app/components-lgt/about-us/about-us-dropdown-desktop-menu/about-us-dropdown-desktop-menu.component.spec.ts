import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsDropdownDesktopMenuComponent } from './about-us-dropdown-desktop-menu.component';

describe('AboutUsDropdownDesktopMenuComponent', () => {
  let component: AboutUsDropdownDesktopMenuComponent;
  let fixture: ComponentFixture<AboutUsDropdownDesktopMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsDropdownDesktopMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsDropdownDesktopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

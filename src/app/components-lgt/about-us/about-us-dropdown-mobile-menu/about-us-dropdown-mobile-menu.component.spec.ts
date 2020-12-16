import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsDropdownMobileMenuComponent } from './about-us-dropdown-mobile-menu.component';

describe('AboutUsDropdownMobileMenuComponent', () => {
  let component: AboutUsDropdownMobileMenuComponent;
  let fixture: ComponentFixture<AboutUsDropdownMobileMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsDropdownMobileMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsDropdownMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

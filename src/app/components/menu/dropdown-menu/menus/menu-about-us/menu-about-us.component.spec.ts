import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAboutUsComponent } from './menu-about-us.component';

describe('MenuAboutUsComponent', () => {
  let component: MenuAboutUsComponent;
  let fixture: ComponentFixture<MenuAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAboutUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

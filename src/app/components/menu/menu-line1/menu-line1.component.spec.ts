import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLine1Component } from './menu-line1.component';

describe('MenuLine1Component', () => {
  let component: MenuLine1Component;
  let fixture: ComponentFixture<MenuLine1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLine1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLine1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

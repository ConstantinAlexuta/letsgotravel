import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dropdown1Component } from './dropdown1.component';

describe('Dropdown1Component', () => {
  let component: Dropdown1Component;
  let fixture: ComponentFixture<Dropdown1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dropdown1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dropdown1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOffersComponent } from './menu-offers.component';

describe('MenuOffersComponent', () => {
  let component: MenuOffersComponent;
  let fixture: ComponentFixture<MenuOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

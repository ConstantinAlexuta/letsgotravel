import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHomeCardsComponent } from './menu-home-cards.component';

describe('MenuHomeCardsComponent', () => {
  let component: MenuHomeCardsComponent;
  let fixture: ComponentFixture<MenuHomeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuHomeCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHomeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

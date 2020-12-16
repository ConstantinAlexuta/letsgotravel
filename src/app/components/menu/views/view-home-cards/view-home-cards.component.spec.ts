import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHomeCardsComponent } from './view-home-cards.component';

describe('ViewHomeCardsComponent', () => {
  let component: ViewHomeCardsComponent;
  let fixture: ComponentFixture<ViewHomeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHomeCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHomeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

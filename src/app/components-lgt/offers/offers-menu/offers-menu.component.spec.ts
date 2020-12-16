import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersMenuComponent } from './offers-menu.component';

describe('OffersMenuComponent', () => {
  let component: OffersMenuComponent;
  let fixture: ComponentFixture<OffersMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersViewComponent } from './offers-view.component';

describe('OffersViewComponent', () => {
  let component: OffersViewComponent;
  let fixture: ComponentFixture<OffersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

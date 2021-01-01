import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOffersViewComponent } from './manager-offers-view.component';

describe('ManagerOffersViewComponent', () => {
  let component: ManagerOffersViewComponent;
  let fixture: ComponentFixture<ManagerOffersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerOffersViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerOffersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

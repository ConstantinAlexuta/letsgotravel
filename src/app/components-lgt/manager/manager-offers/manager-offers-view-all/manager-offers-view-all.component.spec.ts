import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOffersViewAllComponent } from './manager-offers-view-all.component';

describe('ManagerOffersViewAllComponent', () => {
  let component: ManagerOffersViewAllComponent;
  let fixture: ComponentFixture<ManagerOffersViewAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerOffersViewAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerOffersViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

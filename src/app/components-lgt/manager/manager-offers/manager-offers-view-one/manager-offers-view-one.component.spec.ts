import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOffersViewOneComponent } from './manager-offers-view-one.component';

describe('ManagerOffersViewOneComponent', () => {
  let component: ManagerOffersViewOneComponent;
  let fixture: ComponentFixture<ManagerOffersViewOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerOffersViewOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerOffersViewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

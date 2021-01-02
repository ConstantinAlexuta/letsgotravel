import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOffersAddOneComponent } from './manager-offers-add-one.component';

describe('ManagerOffersAddOneComponent', () => {
  let component: ManagerOffersAddOneComponent;
  let fixture: ComponentFixture<ManagerOffersAddOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerOffersAddOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerOffersAddOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

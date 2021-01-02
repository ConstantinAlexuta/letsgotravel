import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOffersAddMoreComponent } from './manager-offers-add-more.component';

describe('ManagerOffersAddMoreComponent', () => {
  let component: ManagerOffersAddMoreComponent;
  let fixture: ComponentFixture<ManagerOffersAddMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerOffersAddMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerOffersAddMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

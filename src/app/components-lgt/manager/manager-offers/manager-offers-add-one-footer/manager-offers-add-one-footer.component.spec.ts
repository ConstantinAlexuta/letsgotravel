import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOffersAddOneFooterComponent } from './manager-offers-add-one-footer.component';

describe('ManagerOffersAddOneFooterComponent', () => {
  let component: ManagerOffersAddOneFooterComponent;
  let fixture: ComponentFixture<ManagerOffersAddOneFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerOffersAddOneFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerOffersAddOneFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOffersViewOneFooterComponent } from './manager-offers-view-one-footer.component';

describe('ManagerOffersViewOneFooterComponent', () => {
  let component: ManagerOffersViewOneFooterComponent;
  let fixture: ComponentFixture<ManagerOffersViewOneFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerOffersViewOneFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerOffersViewOneFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

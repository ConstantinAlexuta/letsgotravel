import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOffersEditOneFooterComponent } from './manager-offers-edit-one-footer.component';

describe('ManagerOffersEditOneFooterComponent', () => {
  let component: ManagerOffersEditOneFooterComponent;
  let fixture: ComponentFixture<ManagerOffersEditOneFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerOffersEditOneFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerOffersEditOneFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

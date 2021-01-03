import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOffersAddMoreFooterComponent } from './manager-offers-add-more-footer.component';

describe('ManagerOffersAddMoreFooterComponent', () => {
  let component: ManagerOffersAddMoreFooterComponent;
  let fixture: ComponentFixture<ManagerOffersAddMoreFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerOffersAddMoreFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerOffersAddMoreFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

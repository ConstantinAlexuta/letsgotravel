import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOffersViewAllFooterComponent } from './manager-offers-view-all-footer.component';

describe('ManagerOffersViewAllFooterComponent', () => {
  let component: ManagerOffersViewAllFooterComponent;
  let fixture: ComponentFixture<ManagerOffersViewAllFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerOffersViewAllFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerOffersViewAllFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

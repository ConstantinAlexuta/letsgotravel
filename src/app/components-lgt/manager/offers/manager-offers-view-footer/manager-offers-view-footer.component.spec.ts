import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOffersViewFooterComponent } from './manager-offers-view-footer.component';

describe('ManagerOffersViewFooterComponent', () => {
  let component: ManagerOffersViewFooterComponent;
  let fixture: ComponentFixture<ManagerOffersViewFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerOffersViewFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerOffersViewFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

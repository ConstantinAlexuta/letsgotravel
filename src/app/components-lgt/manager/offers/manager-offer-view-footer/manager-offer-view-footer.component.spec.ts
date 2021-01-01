import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOfferViewFooterComponent } from './manager-offer-view-footer.component';

describe('ManagerOfferViewFooterComponent', () => {
  let component: ManagerOfferViewFooterComponent;
  let fixture: ComponentFixture<ManagerOfferViewFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerOfferViewFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerOfferViewFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

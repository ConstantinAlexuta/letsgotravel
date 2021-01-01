import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOfferViewComponent } from './manager-offer-view.component';

describe('ManagerOfferViewComponent', () => {
  let component: ManagerOfferViewComponent;
  let fixture: ComponentFixture<ManagerOfferViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerOfferViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerOfferViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

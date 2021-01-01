import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOfferEditFooterComponent } from './manager-offer-edit-footer.component';

describe('ManagerOfferEditFooterComponent', () => {
  let component: ManagerOfferEditFooterComponent;
  let fixture: ComponentFixture<ManagerOfferEditFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerOfferEditFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerOfferEditFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

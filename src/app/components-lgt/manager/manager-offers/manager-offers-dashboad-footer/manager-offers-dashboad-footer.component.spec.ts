import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOffersDashboadFooterComponent } from './manager-offers-dashboad-footer.component';

describe('ManagerOffersDashboadFooterComponent', () => {
  let component: ManagerOffersDashboadFooterComponent;
  let fixture: ComponentFixture<ManagerOffersDashboadFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerOffersDashboadFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerOffersDashboadFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

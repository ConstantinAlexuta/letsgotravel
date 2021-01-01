import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAddOfferFooterComponent } from './manager-add-offer-footer.component';

describe('ManagerAddOfferFooterComponent', () => {
  let component: ManagerAddOfferFooterComponent;
  let fixture: ComponentFixture<ManagerAddOfferFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerAddOfferFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerAddOfferFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

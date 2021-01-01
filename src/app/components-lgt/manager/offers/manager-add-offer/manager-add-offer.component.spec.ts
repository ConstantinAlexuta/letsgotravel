import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAddOfferComponent } from './manager-add-offer.component';

describe('ManagerAddOfferComponent', () => {
  let component: ManagerAddOfferComponent;
  let fixture: ComponentFixture<ManagerAddOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerAddOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerAddOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAddOffersComponent } from './manager-add-offers.component';

describe('ManagerAddOffersComponent', () => {
  let component: ManagerAddOffersComponent;
  let fixture: ComponentFixture<ManagerAddOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerAddOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerAddOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

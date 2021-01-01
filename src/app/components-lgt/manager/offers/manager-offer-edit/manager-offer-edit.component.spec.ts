import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOfferEditComponent } from './manager-offer-edit.component';

describe('ManagerOfferEditComponent', () => {
  let component: ManagerOfferEditComponent;
  let fixture: ComponentFixture<ManagerOfferEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerOfferEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerOfferEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

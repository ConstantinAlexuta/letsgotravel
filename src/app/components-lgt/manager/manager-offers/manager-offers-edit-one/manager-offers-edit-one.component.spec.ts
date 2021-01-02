import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOffersEditOneComponent } from './manager-offers-edit-one.component';

describe('ManagerOffersEditOneComponent', () => {
  let component: ManagerOffersEditOneComponent;
  let fixture: ComponentFixture<ManagerOffersEditOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerOffersEditOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerOffersEditOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOffersEditComponent } from './manager-offers-edit.component';

describe('ManagerOffersEditComponent', () => {
  let component: ManagerOffersEditComponent;
  let fixture: ComponentFixture<ManagerOffersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerOffersEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerOffersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOffersDashboadComponent } from './manager-offers-dashboad.component';

describe('ManagerOffersDashboadComponent', () => {
  let component: ManagerOffersDashboadComponent;
  let fixture: ComponentFixture<ManagerOffersDashboadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerOffersDashboadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerOffersDashboadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersViewAllListedComponent } from './offers-view-all-listed.component';

describe('OffersViewAllListedComponent', () => {
  let component: OffersViewAllListedComponent;
  let fixture: ComponentFixture<OffersViewAllListedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersViewAllListedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersViewAllListedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

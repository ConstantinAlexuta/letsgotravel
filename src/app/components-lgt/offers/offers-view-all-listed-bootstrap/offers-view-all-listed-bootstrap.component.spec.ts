import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersViewAllListedBootstrapComponent } from './offers-view-all-listed-bootstrap.component';

describe('OffersViewAllListedBootstrapComponent', () => {
  let component: OffersViewAllListedBootstrapComponent;
  let fixture: ComponentFixture<OffersViewAllListedBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersViewAllListedBootstrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersViewAllListedBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

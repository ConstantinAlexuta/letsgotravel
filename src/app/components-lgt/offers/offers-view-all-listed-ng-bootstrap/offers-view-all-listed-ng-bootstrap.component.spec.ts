import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersViewAllListedNgBootstrapComponent } from './offers-view-all-listed-ng-bootstrap.component';

describe('OffersViewAllListedNgBootstrapComponent', () => {
  let component: OffersViewAllListedNgBootstrapComponent;
  let fixture: ComponentFixture<OffersViewAllListedNgBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersViewAllListedNgBootstrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersViewAllListedNgBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
